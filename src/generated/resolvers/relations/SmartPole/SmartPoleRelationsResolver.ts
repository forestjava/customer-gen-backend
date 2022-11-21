import * as TypeGraphQL from "type-graphql";
import { Device } from "../../../models/Device";
import { SmartPole } from "../../../models/SmartPole";
import { Zone } from "../../../models/Zone";
import { SmartPoleDevicesArgs } from "./args/SmartPoleDevicesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SmartPole)
export class SmartPoleRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Zone, {
    nullable: true
  })
  async zone(@TypeGraphQL.Root() smartPole: SmartPole, @TypeGraphQL.Ctx() ctx: any): Promise<Zone | null> {
    return getPrismaFromContext(ctx).smartPole.findUnique({
      where: {
        id: smartPole.id,
      },
    }).zone({});
  }

  @TypeGraphQL.FieldResolver(_type => [Device], {
    nullable: false
  })
  async devices(@TypeGraphQL.Root() smartPole: SmartPole, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SmartPoleDevicesArgs): Promise<Device[]> {
    return getPrismaFromContext(ctx).smartPole.findUnique({
      where: {
        id: smartPole.id,
      },
    }).devices(args);
  }
}
