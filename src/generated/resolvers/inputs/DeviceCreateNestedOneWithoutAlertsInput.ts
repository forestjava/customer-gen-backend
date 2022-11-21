import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateOrConnectWithoutAlertsInput } from "../inputs/DeviceCreateOrConnectWithoutAlertsInput";
import { DeviceCreateWithoutAlertsInput } from "../inputs/DeviceCreateWithoutAlertsInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceCreateNestedOneWithoutAlertsInput", {
  isAbstract: true
})
export class DeviceCreateNestedOneWithoutAlertsInput {
  @TypeGraphQL.Field(_type => DeviceCreateWithoutAlertsInput, {
    nullable: true
  })
  create?: DeviceCreateWithoutAlertsInput | undefined;

  @TypeGraphQL.Field(_type => DeviceCreateOrConnectWithoutAlertsInput, {
    nullable: true
  })
  connectOrCreate?: DeviceCreateOrConnectWithoutAlertsInput | undefined;

  @TypeGraphQL.Field(_type => DeviceWhereUniqueInput, {
    nullable: true
  })
  connect?: DeviceWhereUniqueInput | undefined;
}
