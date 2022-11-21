import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { UserGroup } from "../../../models/UserGroup";
import { UserRole } from "../../../models/UserRole";
import { UserGroupsArgs } from "./args/UserGroupsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => UserRole, {
    nullable: true
  })
  async role(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<UserRole | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).role({});
  }

  @TypeGraphQL.FieldResolver(_type => [UserGroup], {
    nullable: false
  })
  async groups(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserGroupsArgs): Promise<UserGroup[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).groups(args);
  }
}
