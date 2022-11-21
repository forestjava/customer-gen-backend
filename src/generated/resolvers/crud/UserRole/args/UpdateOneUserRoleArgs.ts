import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserRoleUpdateInput } from "../../../inputs/UserRoleUpdateInput";
import { UserRoleWhereUniqueInput } from "../../../inputs/UserRoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUserRoleArgs {
  @TypeGraphQL.Field(_type => UserRoleUpdateInput, {
    nullable: false
  })
  data!: UserRoleUpdateInput;

  @TypeGraphQL.Field(_type => UserRoleWhereUniqueInput, {
    nullable: false
  })
  where!: UserRoleWhereUniqueInput;
}
