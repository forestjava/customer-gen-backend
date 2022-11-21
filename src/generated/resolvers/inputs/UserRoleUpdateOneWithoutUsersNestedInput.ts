import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserRoleCreateOrConnectWithoutUsersInput } from "../inputs/UserRoleCreateOrConnectWithoutUsersInput";
import { UserRoleCreateWithoutUsersInput } from "../inputs/UserRoleCreateWithoutUsersInput";
import { UserRoleUpdateWithoutUsersInput } from "../inputs/UserRoleUpdateWithoutUsersInput";
import { UserRoleUpsertWithoutUsersInput } from "../inputs/UserRoleUpsertWithoutUsersInput";
import { UserRoleWhereUniqueInput } from "../inputs/UserRoleWhereUniqueInput";

@TypeGraphQL.InputType("UserRoleUpdateOneWithoutUsersNestedInput", {
  isAbstract: true
})
export class UserRoleUpdateOneWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => UserRoleCreateWithoutUsersInput, {
    nullable: true
  })
  create?: UserRoleCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: UserRoleUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserRoleWhereUniqueInput, {
    nullable: true
  })
  connect?: UserRoleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserRoleUpdateWithoutUsersInput, {
    nullable: true
  })
  update?: UserRoleUpdateWithoutUsersInput | undefined;
}
