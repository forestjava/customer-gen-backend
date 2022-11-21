import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserGroupWhereUniqueInput } from "../../../inputs/UserGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUserGroupArgs {
  @TypeGraphQL.Field(_type => UserGroupWhereUniqueInput, {
    nullable: false
  })
  where!: UserGroupWhereUniqueInput;
}
