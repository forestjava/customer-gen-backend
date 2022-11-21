import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateRegionArgs } from "./args/AggregateRegionArgs";
import { Region } from "../../../models/Region";
import { AggregateRegion } from "../../outputs/AggregateRegion";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Region)
export class AggregateRegionResolver {
  @TypeGraphQL.Query(_returns => AggregateRegion, {
    nullable: false
  })
  async aggregateRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRegionArgs): Promise<AggregateRegion> {
    return getPrismaFromContext(ctx).region.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
