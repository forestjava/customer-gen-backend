import * as TypeGraphQL from "type-graphql";
import { Alert } from "../../../models/Alert";
import { Device } from "../../../models/Device";
import { DeviceType } from "../../../models/DeviceType";
import { Event } from "../../../models/Event";
import { SmartPole } from "../../../models/SmartPole";
import { DeviceAlertsArgs } from "./args/DeviceAlertsArgs";
import { DeviceEventsArgs } from "./args/DeviceEventsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Device)
export class DeviceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => DeviceType, {
    nullable: true
  })
  async type(@TypeGraphQL.Root() device: Device, @TypeGraphQL.Ctx() ctx: any): Promise<DeviceType | null> {
    return getPrismaFromContext(ctx).device.findUnique({
      where: {
        id: device.id,
      },
    }).type({});
  }

  @TypeGraphQL.FieldResolver(_type => [Alert], {
    nullable: false
  })
  async alerts(@TypeGraphQL.Root() device: Device, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeviceAlertsArgs): Promise<Alert[]> {
    return getPrismaFromContext(ctx).device.findUnique({
      where: {
        id: device.id,
      },
    }).alerts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Event], {
    nullable: false
  })
  async events(@TypeGraphQL.Root() device: Device, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeviceEventsArgs): Promise<Event[]> {
    return getPrismaFromContext(ctx).device.findUnique({
      where: {
        id: device.id,
      },
    }).events(args);
  }

  @TypeGraphQL.FieldResolver(_type => SmartPole, {
    nullable: true
  })
  async smartPole(@TypeGraphQL.Root() device: Device, @TypeGraphQL.Ctx() ctx: any): Promise<SmartPole | null> {
    return getPrismaFromContext(ctx).device.findUnique({
      where: {
        id: device.id,
      },
    }).smartPole({});
  }
}
