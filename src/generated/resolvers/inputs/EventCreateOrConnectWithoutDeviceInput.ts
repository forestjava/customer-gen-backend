import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateWithoutDeviceInput } from "../inputs/EventCreateWithoutDeviceInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventCreateOrConnectWithoutDeviceInput", {
  isAbstract: true
})
export class EventCreateOrConnectWithoutDeviceInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventCreateWithoutDeviceInput, {
    nullable: false
  })
  create!: EventCreateWithoutDeviceInput;
}
