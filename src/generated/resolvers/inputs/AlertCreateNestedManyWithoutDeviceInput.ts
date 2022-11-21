import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertCreateManyDeviceInputEnvelope } from "../inputs/AlertCreateManyDeviceInputEnvelope";
import { AlertCreateOrConnectWithoutDeviceInput } from "../inputs/AlertCreateOrConnectWithoutDeviceInput";
import { AlertCreateWithoutDeviceInput } from "../inputs/AlertCreateWithoutDeviceInput";
import { AlertWhereUniqueInput } from "../inputs/AlertWhereUniqueInput";

@TypeGraphQL.InputType("AlertCreateNestedManyWithoutDeviceInput", {
  isAbstract: true
})
export class AlertCreateNestedManyWithoutDeviceInput {
  @TypeGraphQL.Field(_type => [AlertCreateWithoutDeviceInput], {
    nullable: true
  })
  create?: AlertCreateWithoutDeviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertCreateOrConnectWithoutDeviceInput], {
    nullable: true
  })
  connectOrCreate?: AlertCreateOrConnectWithoutDeviceInput[] | undefined;

  @TypeGraphQL.Field(_type => AlertCreateManyDeviceInputEnvelope, {
    nullable: true
  })
  createMany?: AlertCreateManyDeviceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AlertWhereUniqueInput], {
    nullable: true
  })
  connect?: AlertWhereUniqueInput[] | undefined;
}
