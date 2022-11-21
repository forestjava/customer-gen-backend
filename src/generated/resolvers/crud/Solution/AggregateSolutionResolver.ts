import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSolutionArgs } from "./args/AggregateSolutionArgs";
import { Solution } from "../../../models/Solution";
import { AggregateSolution } from "../../outputs/AggregateSolution";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Solution)
export class AggregateSolutionResolver {
  @TypeGraphQL.Query(_returns => AggregateSolution, {
    nullable: false
  })
  async aggregateSolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSolutionArgs): Promise<AggregateSolution> {
    return getPrismaFromContext(ctx).solution.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
