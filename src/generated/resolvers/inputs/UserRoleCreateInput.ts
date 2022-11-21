import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutRoleInput } from "../inputs/UserCreateNestedManyWithoutRoleInput";

@TypeGraphQL.InputType("UserRoleCreateInput", {
  isAbstract: true
})
export class UserRoleCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutRoleInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutRoleInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;
}
