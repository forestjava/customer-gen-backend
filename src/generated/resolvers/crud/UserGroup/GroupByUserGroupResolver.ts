import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByUserGroupArgs } from "./args/GroupByUserGroupArgs";
import { UserGroup } from "../../../models/UserGroup";
import { UserGroupGroupBy } from "../../outputs/UserGroupGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserGroup)
export class GroupByUserGroupResolver {
  @TypeGraphQL.Query(_returns => [UserGroupGroupBy], {
    nullable: false
  })
  async groupByUserGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserGroupArgs): Promise<UserGroupGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userGroup.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
