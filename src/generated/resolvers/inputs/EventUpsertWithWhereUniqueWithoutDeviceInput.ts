import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateWithoutDeviceInput } from "../inputs/EventCreateWithoutDeviceInput";
import { EventUpdateWithoutDeviceInput } from "../inputs/EventUpdateWithoutDeviceInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpsertWithWhereUniqueWithoutDeviceInput", {
  isAbstract: true
})
export class EventUpsertWithWhereUniqueWithoutDeviceInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventUpdateWithoutDeviceInput, {
    nullable: false
  })
  update!: EventUpdateWithoutDeviceInput;

  @TypeGraphQL.Field(_type => EventCreateWithoutDeviceInput, {
    nullable: false
  })
  create!: EventCreateWithoutDeviceInput;
}
