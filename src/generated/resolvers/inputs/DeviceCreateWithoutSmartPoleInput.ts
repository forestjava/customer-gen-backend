import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertCreateNestedManyWithoutDeviceInput } from "../inputs/AlertCreateNestedManyWithoutDeviceInput";
import { DeviceTypeCreateNestedOneWithoutDevicesInput } from "../inputs/DeviceTypeCreateNestedOneWithoutDevicesInput";
import { EventCreateNestedManyWithoutDeviceInput } from "../inputs/EventCreateNestedManyWithoutDeviceInput";

@TypeGraphQL.InputType("DeviceCreateWithoutSmartPoleInput", {
  isAbstract: true
})
export class DeviceCreateWithoutSmartPoleInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serial?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uuid?: string | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeCreateNestedOneWithoutDevicesInput, {
    nullable: true
  })
  type?: DeviceTypeCreateNestedOneWithoutDevicesInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  connectParamIndex?: string | undefined;

  @TypeGraphQL.Field(_type => AlertCreateNestedManyWithoutDeviceInput, {
    nullable: true
  })
  alerts?: AlertCreateNestedManyWithoutDeviceInput | undefined;

  @TypeGraphQL.Field(_type => EventCreateNestedManyWithoutDeviceInput, {
    nullable: true
  })
  events?: EventCreateNestedManyWithoutDeviceInput | undefined;
}
