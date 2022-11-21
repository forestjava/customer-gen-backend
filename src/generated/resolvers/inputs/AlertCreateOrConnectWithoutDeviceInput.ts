import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertCreateWithoutDeviceInput } from "../inputs/AlertCreateWithoutDeviceInput";
import { AlertWhereUniqueInput } from "../inputs/AlertWhereUniqueInput";

@TypeGraphQL.InputType("AlertCreateOrConnectWithoutDeviceInput", {
  isAbstract: true
})
export class AlertCreateOrConnectWithoutDeviceInput {
  @TypeGraphQL.Field(_type => AlertWhereUniqueInput, {
    nullable: false
  })
  where!: AlertWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlertCreateWithoutDeviceInput, {
    nullable: false
  })
  create!: AlertCreateWithoutDeviceInput;
}
