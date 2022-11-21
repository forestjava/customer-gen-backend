import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertCreateManyDeviceInputEnvelope } from "../inputs/AlertCreateManyDeviceInputEnvelope";
import { AlertCreateOrConnectWithoutDeviceInput } from "../inputs/AlertCreateOrConnectWithoutDeviceInput";
import { AlertCreateWithoutDeviceInput } from "../inputs/AlertCreateWithoutDeviceInput";
import { AlertScalarWhereInput } from "../inputs/AlertScalarWhereInput";
import { AlertUpdateManyWithWhereWithoutDeviceInput } from "../inputs/AlertUpdateManyWithWhereWithoutDeviceInput";
import { AlertUpdateWithWhereUniqueWithoutDeviceInput } from "../inputs/AlertUpdateWithWhereUniqueWithoutDeviceInput";
import { AlertUpsertWithWhereUniqueWithoutDeviceInput } from "../inputs/AlertUpsertWithWhereUniqueWithoutDeviceInput";
import { AlertWhereUniqueInput } from "../inputs/AlertWhereUniqueInput";

@TypeGraphQL.InputType("AlertUpdateManyWithoutDeviceNestedInput", {
  isAbstract: true
})
export class AlertUpdateManyWithoutDeviceNestedInput {
  @TypeGraphQL.Field(_type => [AlertCreateWithoutDeviceInput], {
    nullable: true
  })
  create?: AlertCreateWithoutDeviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertCreateOrConnectWithoutDeviceInput], {
    nullable: true
  })
  connectOrCreate?: AlertCreateOrConnectWithoutDeviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertUpsertWithWhereUniqueWithoutDeviceInput], {
    nullable: true
  })
  upsert?: AlertUpsertWithWhereUniqueWithoutDeviceInput[] | undefined;

  @TypeGraphQL.Field(_type => AlertCreateManyDeviceInputEnvelope, {
    nullable: true
  })
  createMany?: AlertCreateManyDeviceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AlertWhereUniqueInput], {
    nullable: true
  })
  set?: AlertWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AlertWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertWhereUniqueInput], {
    nullable: true
  })
  delete?: AlertWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertWhereUniqueInput], {
    nullable: true
  })
  connect?: AlertWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertUpdateWithWhereUniqueWithoutDeviceInput], {
    nullable: true
  })
  update?: AlertUpdateWithWhereUniqueWithoutDeviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertUpdateManyWithWhereWithoutDeviceInput], {
    nullable: true
  })
  updateMany?: AlertUpdateManyWithWhereWithoutDeviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AlertScalarWhereInput[] | undefined;
}
