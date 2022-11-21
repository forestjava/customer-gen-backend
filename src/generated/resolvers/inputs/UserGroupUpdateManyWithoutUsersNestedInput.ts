import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserGroupCreateOrConnectWithoutUsersInput } from "../inputs/UserGroupCreateOrConnectWithoutUsersInput";
import { UserGroupCreateWithoutUsersInput } from "../inputs/UserGroupCreateWithoutUsersInput";
import { UserGroupScalarWhereInput } from "../inputs/UserGroupScalarWhereInput";
import { UserGroupUpdateManyWithWhereWithoutUsersInput } from "../inputs/UserGroupUpdateManyWithWhereWithoutUsersInput";
import { UserGroupUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/UserGroupUpdateWithWhereUniqueWithoutUsersInput";
import { UserGroupUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/UserGroupUpsertWithWhereUniqueWithoutUsersInput";
import { UserGroupWhereUniqueInput } from "../inputs/UserGroupWhereUniqueInput";

@TypeGraphQL.InputType("UserGroupUpdateManyWithoutUsersNestedInput", {
  isAbstract: true
})
export class UserGroupUpdateManyWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => [UserGroupCreateWithoutUsersInput], {
    nullable: true
  })
  create?: UserGroupCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: UserGroupCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: UserGroupUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupWhereUniqueInput], {
    nullable: true
  })
  set?: UserGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupWhereUniqueInput], {
    nullable: true
  })
  delete?: UserGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: UserGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: UserGroupUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: UserGroupUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserGroupScalarWhereInput[] | undefined;
}
