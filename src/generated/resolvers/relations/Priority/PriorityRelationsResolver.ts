import * as TypeGraphQL from "type-graphql";
import { Alert } from "../../../models/Alert";
import { Event } from "../../../models/Event";
import { Priority } from "../../../models/Priority";
import { PriorityAlertsArgs } from "./args/PriorityAlertsArgs";
import { PriorityEventsArgs } from "./args/PriorityEventsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Priority)
export class PriorityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Alert], {
    nullable: false
  })
  async alerts(@TypeGraphQL.Root() priority: Priority, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PriorityAlertsArgs): Promise<Alert[]> {
    return getPrismaFromContext(ctx).priority.findUnique({
      where: {
        id: priority.id,
      },
    }).alerts(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Event], {
    nullable: false
  })
  async events(@TypeGraphQL.Root() priority: Priority, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PriorityEventsArgs): Promise<Event[]> {
    return getPrismaFromContext(ctx).priority.findUnique({
      where: {
        id: priority.id,
      },
    }).events(args);
  }
}
