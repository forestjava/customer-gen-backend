import * as TypeGraphQL from "type-graphql";
import { Formation } from "../../../models/Formation";
import { SmartPole } from "../../../models/SmartPole";
import { Zone } from "../../../models/Zone";
import { ZoneSmartPolesArgs } from "./args/ZoneSmartPolesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Zone)
export class ZoneRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Formation, {
    nullable: true
  })
  async formation(@TypeGraphQL.Root() zone: Zone, @TypeGraphQL.Ctx() ctx: any): Promise<Formation | null> {
    return getPrismaFromContext(ctx).zone.findUnique({
      where: {
        id: zone.id,
      },
    }).formation({});
  }

  @TypeGraphQL.FieldResolver(_type => [SmartPole], {
    nullable: false
  })
  async smartPoles(@TypeGraphQL.Root() zone: Zone, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ZoneSmartPolesArgs): Promise<SmartPole[]> {
    return getPrismaFromContext(ctx).zone.findUnique({
      where: {
        id: zone.id,
      },
    }).smartPoles(args);
  }
}
