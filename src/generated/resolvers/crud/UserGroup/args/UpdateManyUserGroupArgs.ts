import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserGroupUpdateManyMutationInput } from "../../../inputs/UserGroupUpdateManyMutationInput";
import { UserGroupWhereInput } from "../../../inputs/UserGroupWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserGroupArgs {
  @TypeGraphQL.Field(_type => UserGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserGroupUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserGroupWhereInput, {
    nullable: true
  })
  where?: UserGroupWhereInput | undefined;
}
