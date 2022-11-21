import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneUserGroupArgs } from "./args/UpsertOneUserGroupArgs";
import { UserGroup } from "../../../models/UserGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserGroup)
export class UpsertOneUserGroupResolver {
  @TypeGraphQL.Mutation(_returns => UserGroup, {
    nullable: false
  })
  async upsertOneUserGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUserGroupArgs): Promise<UserGroup> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).userGroup.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
