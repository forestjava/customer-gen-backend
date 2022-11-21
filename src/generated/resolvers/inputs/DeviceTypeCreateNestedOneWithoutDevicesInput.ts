import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTypeCreateOrConnectWithoutDevicesInput } from "../inputs/DeviceTypeCreateOrConnectWithoutDevicesInput";
import { DeviceTypeCreateWithoutDevicesInput } from "../inputs/DeviceTypeCreateWithoutDevicesInput";
import { DeviceTypeWhereUniqueInput } from "../inputs/DeviceTypeWhereUniqueInput";

@TypeGraphQL.InputType("DeviceTypeCreateNestedOneWithoutDevicesInput", {
  isAbstract: true
})
export class DeviceTypeCreateNestedOneWithoutDevicesInput {
  @TypeGraphQL.Field(_type => DeviceTypeCreateWithoutDevicesInput, {
    nullable: true
  })
  create?: DeviceTypeCreateWithoutDevicesInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeCreateOrConnectWithoutDevicesInput, {
    nullable: true
  })
  connectOrCreate?: DeviceTypeCreateOrConnectWithoutDevicesInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: DeviceTypeWhereUniqueInput | undefined;
}
