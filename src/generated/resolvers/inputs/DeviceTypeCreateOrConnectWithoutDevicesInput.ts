import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTypeCreateWithoutDevicesInput } from "../inputs/DeviceTypeCreateWithoutDevicesInput";
import { DeviceTypeWhereUniqueInput } from "../inputs/DeviceTypeWhereUniqueInput";

@TypeGraphQL.InputType("DeviceTypeCreateOrConnectWithoutDevicesInput", {
  isAbstract: true
})
export class DeviceTypeCreateOrConnectWithoutDevicesInput {
  @TypeGraphQL.Field(_type => DeviceTypeWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeviceTypeCreateWithoutDevicesInput, {
    nullable: false
  })
  create!: DeviceTypeCreateWithoutDevicesInput;
}
