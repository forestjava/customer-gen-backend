import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneUserRoleArgs } from "./args/UpsertOneUserRoleArgs";
import { UserRole } from "../../../models/UserRole";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserRole)
export class UpsertOneUserRoleResolver {
  @TypeGraphQL.Mutation(_returns => UserRole, {
    nullable: false
  })
  async upsertOneUserRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUserRoleArgs): Promise<UserRole> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userRole.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
