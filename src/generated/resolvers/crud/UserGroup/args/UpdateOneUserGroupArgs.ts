import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserGroupUpdateInput } from "../../../inputs/UserGroupUpdateInput";
import { UserGroupWhereUniqueInput } from "../../../inputs/UserGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUserGroupArgs {
  @TypeGraphQL.Field(_type => UserGroupUpdateInput, {
    nullable: false
  })
  data!: UserGroupUpdateInput;

  @TypeGraphQL.Field(_type => UserGroupWhereUniqueInput, {
    nullable: false
  })
  where!: UserGroupWhereUniqueInput;
}
