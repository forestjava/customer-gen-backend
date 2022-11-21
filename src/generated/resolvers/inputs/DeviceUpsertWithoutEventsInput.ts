import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateWithoutEventsInput } from "../inputs/DeviceCreateWithoutEventsInput";
import { DeviceUpdateWithoutEventsInput } from "../inputs/DeviceUpdateWithoutEventsInput";

@TypeGraphQL.InputType("DeviceUpsertWithoutEventsInput", {
  isAbstract: true
})
export class DeviceUpsertWithoutEventsInput {
  @TypeGraphQL.Field(_type => DeviceUpdateWithoutEventsInput, {
    nullable: false
  })
  update!: DeviceUpdateWithoutEventsInput;

  @TypeGraphQL.Field(_type => DeviceCreateWithoutEventsInput, {
    nullable: false
  })
  create!: DeviceCreateWithoutEventsInput;
}
