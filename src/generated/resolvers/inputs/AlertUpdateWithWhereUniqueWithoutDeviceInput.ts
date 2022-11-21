import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertUpdateWithoutDeviceInput } from "../inputs/AlertUpdateWithoutDeviceInput";
import { AlertWhereUniqueInput } from "../inputs/AlertWhereUniqueInput";

@TypeGraphQL.InputType("AlertUpdateWithWhereUniqueWithoutDeviceInput", {
  isAbstract: true
})
export class AlertUpdateWithWhereUniqueWithoutDeviceInput {
  @TypeGraphQL.Field(_type => AlertWhereUniqueInput, {
    nullable: false
  })
  where!: AlertWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlertUpdateWithoutDeviceInput, {
    nullable: false
  })
  data!: AlertUpdateWithoutDeviceInput;
}
