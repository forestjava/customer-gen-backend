import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserGroupCreateInput } from "../../../inputs/UserGroupCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUserGroupArgs {
  @TypeGraphQL.Field(_type => UserGroupCreateInput, {
    nullable: false
  })
  data!: UserGroupCreateInput;
}
