import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventUpdateWithoutDeviceInput } from "../inputs/EventUpdateWithoutDeviceInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpdateWithWhereUniqueWithoutDeviceInput", {
  isAbstract: true
})
export class EventUpdateWithWhereUniqueWithoutDeviceInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventUpdateWithoutDeviceInput, {
    nullable: false
  })
  data!: EventUpdateWithoutDeviceInput;
}
