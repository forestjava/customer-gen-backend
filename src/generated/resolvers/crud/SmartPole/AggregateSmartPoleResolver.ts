import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSmartPoleArgs } from "./args/AggregateSmartPoleArgs";
import { SmartPole } from "../../../models/SmartPole";
import { AggregateSmartPole } from "../../outputs/AggregateSmartPole";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SmartPole)
export class AggregateSmartPoleResolver {
  @TypeGraphQL.Query(_returns => AggregateSmartPole, {
    nullable: false
  })
  async aggregateSmartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSmartPoleArgs): Promise<AggregateSmartPole> {
    return getPrismaFromContext(ctx).smartPole.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
