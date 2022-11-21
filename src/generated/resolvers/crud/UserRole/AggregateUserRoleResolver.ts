import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserRoleArgs } from "./args/AggregateUserRoleArgs";
import { UserRole } from "../../../models/UserRole";
import { AggregateUserRole } from "../../outputs/AggregateUserRole";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserRole)
export class AggregateUserRoleResolver {
  @TypeGraphQL.Query(_returns => AggregateUserRole, {
    nullable: false
  })
  async aggregateUserRole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserRoleArgs): Promise<AggregateUserRole> {
    return getPrismaFromContext(ctx).userRole.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
