import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTypeCreateOrConnectWithoutDevicesInput } from "../inputs/DeviceTypeCreateOrConnectWithoutDevicesInput";
import { DeviceTypeCreateWithoutDevicesInput } from "../inputs/DeviceTypeCreateWithoutDevicesInput";
import { DeviceTypeUpdateWithoutDevicesInput } from "../inputs/DeviceTypeUpdateWithoutDevicesInput";
import { DeviceTypeUpsertWithoutDevicesInput } from "../inputs/DeviceTypeUpsertWithoutDevicesInput";
import { DeviceTypeWhereUniqueInput } from "../inputs/DeviceTypeWhereUniqueInput";

@TypeGraphQL.InputType("DeviceTypeUpdateOneWithoutDevicesNestedInput", {
  isAbstract: true
})
export class DeviceTypeUpdateOneWithoutDevicesNestedInput {
  @TypeGraphQL.Field(_type => DeviceTypeCreateWithoutDevicesInput, {
    nullable: true
  })
  create?: DeviceTypeCreateWithoutDevicesInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeCreateOrConnectWithoutDevicesInput, {
    nullable: true
  })
  connectOrCreate?: DeviceTypeCreateOrConnectWithoutDevicesInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeUpsertWithoutDevicesInput, {
    nullable: true
  })
  upsert?: DeviceTypeUpsertWithoutDevicesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: DeviceTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeUpdateWithoutDevicesInput, {
    nullable: true
  })
  update?: DeviceTypeUpdateWithoutDevicesInput | undefined;
}
