import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTypeCreateWithoutDevicesInput } from "../inputs/DeviceTypeCreateWithoutDevicesInput";
import { DeviceTypeUpdateWithoutDevicesInput } from "../inputs/DeviceTypeUpdateWithoutDevicesInput";

@TypeGraphQL.InputType("DeviceTypeUpsertWithoutDevicesInput", {
  isAbstract: true
})
export class DeviceTypeUpsertWithoutDevicesInput {
  @TypeGraphQL.Field(_type => DeviceTypeUpdateWithoutDevicesInput, {
    nullable: false
  })
  update!: DeviceTypeUpdateWithoutDevicesInput;

  @TypeGraphQL.Field(_type => DeviceTypeCreateWithoutDevicesInput, {
    nullable: false
  })
  create!: DeviceTypeCreateWithoutDevicesInput;
}
