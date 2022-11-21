import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateWithoutAlertsInput } from "../inputs/DeviceCreateWithoutAlertsInput";
import { DeviceUpdateWithoutAlertsInput } from "../inputs/DeviceUpdateWithoutAlertsInput";

@TypeGraphQL.InputType("DeviceUpsertWithoutAlertsInput", {
  isAbstract: true
})
export class DeviceUpsertWithoutAlertsInput {
  @TypeGraphQL.Field(_type => DeviceUpdateWithoutAlertsInput, {
    nullable: false
  })
  update!: DeviceUpdateWithoutAlertsInput;

  @TypeGraphQL.Field(_type => DeviceCreateWithoutAlertsInput, {
    nullable: false
  })
  create!: DeviceCreateWithoutAlertsInput;
}
