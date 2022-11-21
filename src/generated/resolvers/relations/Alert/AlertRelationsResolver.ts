import * as TypeGraphQL from "type-graphql";
import { Alert } from "../../../models/Alert";
import { Device } from "../../../models/Device";
import { Priority } from "../../../models/Priority";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Alert)
export class AlertRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Priority, {
    nullable: true
  })
  async priority(@TypeGraphQL.Root() alert: Alert, @TypeGraphQL.Ctx() ctx: any): Promise<Priority | null> {
    return getPrismaFromContext(ctx).alert.findUnique({
      where: {
        id: alert.id,
      },
    }).priority({});
  }

  @TypeGraphQL.FieldResolver(_type => Device, {
    nullable: true
  })
  async device(@TypeGraphQL.Root() alert: Alert, @TypeGraphQL.Ctx() ctx: any): Promise<Device | null> {
    return getPrismaFromContext(ctx).alert.findUnique({
      where: {
        id: alert.id,
      },
    }).device({});
  }
}
