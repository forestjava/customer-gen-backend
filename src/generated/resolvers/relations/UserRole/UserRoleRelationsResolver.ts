import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { UserRole } from "../../../models/UserRole";
import { UserRoleUsersArgs } from "./args/UserRoleUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserRole)
export class UserRoleRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() userRole: UserRole, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserRoleUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).userRole.findUnique({
      where: {
        id: userRole.id,
      },
    }).users(args);
  }
}
