import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleCreateWithoutDevicesInput } from "../inputs/SmartPoleCreateWithoutDevicesInput";
import { SmartPoleUpdateWithoutDevicesInput } from "../inputs/SmartPoleUpdateWithoutDevicesInput";

@TypeGraphQL.InputType("SmartPoleUpsertWithoutDevicesInput", {
  isAbstract: true
})
export class SmartPoleUpsertWithoutDevicesInput {
  @TypeGraphQL.Field(_type => SmartPoleUpdateWithoutDevicesInput, {
    nullable: false
  })
  update!: SmartPoleUpdateWithoutDevicesInput;

  @TypeGraphQL.Field(_type => SmartPoleCreateWithoutDevicesInput, {
    nullable: false
  })
  create!: SmartPoleCreateWithoutDevicesInput;
}
