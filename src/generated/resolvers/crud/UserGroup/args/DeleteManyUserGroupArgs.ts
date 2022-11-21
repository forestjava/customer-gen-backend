import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserGroupWhereInput } from "../../../inputs/UserGroupWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserGroupArgs {
  @TypeGraphQL.Field(_type => UserGroupWhereInput, {
    nullable: true
  })
  where?: UserGroupWhereInput | undefined;
}
