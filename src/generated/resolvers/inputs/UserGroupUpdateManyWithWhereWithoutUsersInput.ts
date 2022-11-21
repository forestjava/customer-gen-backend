import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserGroupScalarWhereInput } from "../inputs/UserGroupScalarWhereInput";
import { UserGroupUpdateManyMutationInput } from "../inputs/UserGroupUpdateManyMutationInput";

@TypeGraphQL.InputType("UserGroupUpdateManyWithWhereWithoutUsersInput", {
  isAbstract: true
})
export class UserGroupUpdateManyWithWhereWithoutUsersInput {
  @TypeGraphQL.Field(_type => UserGroupScalarWhereInput, {
    nullable: false
  })
  where!: UserGroupScalarWhereInput;

  @TypeGraphQL.Field(_type => UserGroupUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserGroupUpdateManyMutationInput;
}
