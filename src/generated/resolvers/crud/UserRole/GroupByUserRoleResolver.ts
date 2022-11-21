import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByUserRoleArgs } from "./args/GroupByUserRoleArgs";
import { UserRole } from "../../../models/UserRole";
import { UserRoleGroupBy } from "../../outputs/UserRoleGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserRole)
export class GroupByUserRoleResolver {
  @TypeGraphQL.Query(_returns => [UserRoleGroupBy], {
    nullable: false
  })
  async groupByUserRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUserRoleArgs): Promise<UserRoleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userRole.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
