import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePriorityArgs } from "./args/AggregatePriorityArgs";
import { Priority } from "../../../models/Priority";
import { AggregatePriority } from "../../outputs/AggregatePriority";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Priority)
export class AggregatePriorityResolver {
  @TypeGraphQL.Query(_returns => AggregatePriority, {
    nullable: false
  })
  async aggregatePriority(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePriorityArgs): Promise<AggregatePriority> {
    return getPrismaFromContext(ctx).priority.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
