import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserGroupCreateInput } from "../../../inputs/UserGroupCreateInput";
import { UserGroupUpdateInput } from "../../../inputs/UserGroupUpdateInput";
import { UserGroupWhereUniqueInput } from "../../../inputs/UserGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUserGroupArgs {
  @TypeGraphQL.Field(_type => UserGroupWhereUniqueInput, {
    nullable: false
  })
  where!: UserGroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserGroupCreateInput, {
    nullable: false
  })
  create!: UserGroupCreateInput;

  @TypeGraphQL.Field(_type => UserGroupUpdateInput, {
    nullable: false
  })
  update!: UserGroupUpdateInput;
}
