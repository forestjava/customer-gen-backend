import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateWithoutAlertsInput } from "../inputs/DeviceCreateWithoutAlertsInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceCreateOrConnectWithoutAlertsInput", {
  isAbstract: true
})
export class DeviceCreateOrConnectWithoutAlertsInput {
  @TypeGraphQL.Field(_type => DeviceWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeviceCreateWithoutAlertsInput, {
    nullable: false
  })
  create!: DeviceCreateWithoutAlertsInput;
}
