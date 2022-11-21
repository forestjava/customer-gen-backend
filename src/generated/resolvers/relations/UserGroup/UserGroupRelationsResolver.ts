import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { UserGroup } from "../../../models/UserGroup";
import { UserGroupUsersArgs } from "./args/UserGroupUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserGroup)
export class UserGroupRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() userGroup: UserGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserGroupUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).userGroup.findUnique({
      where: {
        id: userGroup.id,
      },
    }).users(args);
  }
}
