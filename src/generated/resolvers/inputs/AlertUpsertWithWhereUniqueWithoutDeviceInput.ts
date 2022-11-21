import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertCreateWithoutDeviceInput } from "../inputs/AlertCreateWithoutDeviceInput";
import { AlertUpdateWithoutDeviceInput } from "../inputs/AlertUpdateWithoutDeviceInput";
import { AlertWhereUniqueInput } from "../inputs/AlertWhereUniqueInput";

@TypeGraphQL.InputType("AlertUpsertWithWhereUniqueWithoutDeviceInput", {
  isAbstract: true
})
export class AlertUpsertWithWhereUniqueWithoutDeviceInput {
  @TypeGraphQL.Field(_type => AlertWhereUniqueInput, {
    nullable: false
  })
  where!: AlertWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlertUpdateWithoutDeviceInput, {
    nullable: false
  })
  update!: AlertUpdateWithoutDeviceInput;

  @TypeGraphQL.Field(_type => AlertCreateWithoutDeviceInput, {
    nullable: false
  })
  create!: AlertCreateWithoutDeviceInput;
}
