import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupBySmartPoleArgs } from "./args/GroupBySmartPoleArgs";
import { SmartPole } from "../../../models/SmartPole";
import { SmartPoleGroupBy } from "../../outputs/SmartPoleGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SmartPole)
export class GroupBySmartPoleResolver {
  @TypeGraphQL.Query(_returns => [SmartPoleGroupBy], {
    nullable: false
  })
  async groupBySmartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySmartPoleArgs): Promise<SmartPoleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
