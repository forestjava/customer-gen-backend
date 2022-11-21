import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserRoleWhereInput } from "../../../inputs/UserRoleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserRoleArgs {
  @TypeGraphQL.Field(_type => UserRoleWhereInput, {
    nullable: true
  })
  where?: UserRoleWhereInput | undefined;
}
