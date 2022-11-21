import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserGroupArgs } from "./args/AggregateUserGroupArgs";
import { UserGroup } from "../../../models/UserGroup";
import { AggregateUserGroup } from "../../outputs/AggregateUserGroup";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserGroup)
export class AggregateUserGroupResolver {
  @TypeGraphQL.Query(_returns => AggregateUserGroup, {
    nullable: false
  })
  async aggregateUserGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserGroupArgs): Promise<AggregateUserGroup> {
    return getPrismaFromContext(ctx).userGroup.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
