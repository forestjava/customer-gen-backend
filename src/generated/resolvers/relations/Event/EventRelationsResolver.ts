import * as TypeGraphQL from "type-graphql";
import { Device } from "../../../models/Device";
import { Event } from "../../../models/Event";
import { Priority } from "../../../models/Priority";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Event)
export class EventRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Priority, {
    nullable: true
  })
  async priority(@TypeGraphQL.Root() event: Event, @TypeGraphQL.Ctx() ctx: any): Promise<Priority | null> {
    return getPrismaFromContext(ctx).event.findUnique({
      where: {
        id: event.id,
      },
    }).priority({});
  }

  @TypeGraphQL.FieldResolver(_type => Device, {
    nullable: true
  })
  async device(@TypeGraphQL.Root() event: Event, @TypeGraphQL.Ctx() ctx: any): Promise<Device | null> {
    return getPrismaFromContext(ctx).event.findUnique({
      where: {
        id: event.id,
      },
    }).device({});
  }
}
