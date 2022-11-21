import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTypeCreateNestedOneWithoutDevicesInput } from "../inputs/DeviceTypeCreateNestedOneWithoutDevicesInput";
import { EventCreateNestedManyWithoutDeviceInput } from "../inputs/EventCreateNestedManyWithoutDeviceInput";
import { SmartPoleCreateNestedOneWithoutDevicesInput } from "../inputs/SmartPoleCreateNestedOneWithoutDevicesInput";

@TypeGraphQL.InputType("DeviceCreateWithoutAlertsInput", {
  isAbstract: true
})
export class DeviceCreateWithoutAlertsInput {
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

  @TypeGraphQL.Field(_type => EventCreateNestedManyWithoutDeviceInput, {
    nullable: true
  })
  events?: EventCreateNestedManyWithoutDeviceInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleCreateNestedOneWithoutDevicesInput, {
    nullable: true
  })
  smartPole?: SmartPoleCreateNestedOneWithoutDevicesInput | undefined;
}
