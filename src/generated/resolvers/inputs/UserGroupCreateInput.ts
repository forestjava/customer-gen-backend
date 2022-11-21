import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutGroupsInput } from "../inputs/UserCreateNestedManyWithoutGroupsInput";

@TypeGraphQL.InputType("UserGroupCreateInput", {
  isAbstract: true
})
export class UserGroupCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutGroupsInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutGroupsInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color?: string | undefined;
}
