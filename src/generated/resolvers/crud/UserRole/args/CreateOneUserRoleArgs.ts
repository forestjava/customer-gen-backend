import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserRoleCreateInput } from "../../../inputs/UserRoleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUserRoleArgs {
  @TypeGraphQL.Field(_type => UserRoleCreateInput, {
    nullable: false
  })
  data!: UserRoleCreateInput;
}
