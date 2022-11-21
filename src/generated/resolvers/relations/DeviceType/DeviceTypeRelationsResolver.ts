import * as TypeGraphQL from "type-graphql";
import { Device } from "../../../models/Device";
import { DeviceType } from "../../../models/DeviceType";
import { DeviceTypeDevicesArgs } from "./args/DeviceTypeDevicesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeviceType)
export class DeviceTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Device], {
    nullable: false
  })
  async devices(@TypeGraphQL.Root() deviceType: DeviceType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeviceTypeDevicesArgs): Promise<Device[]> {
    return getPrismaFromContext(ctx).deviceType.findUnique({
      where: {
        id: deviceType.id,
      },
    }).devices(args);
  }
}
