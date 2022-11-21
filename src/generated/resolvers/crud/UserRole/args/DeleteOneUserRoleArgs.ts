import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserRoleWhereUniqueInput } from "../../../inputs/UserRoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUserRoleArgs {
  @TypeGraphQL.Field(_type => UserRoleWhereUniqueInput, {
    nullable: false
  })
  where!: UserRoleWhereUniqueInput;
}
