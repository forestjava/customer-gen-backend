import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateWithoutPriorityInput } from "../inputs/EventCreateWithoutPriorityInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventCreateOrConnectWithoutPriorityInput", {
  isAbstract: true
})
export class EventCreateOrConnectWithoutPriorityInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventCreateWithoutPriorityInput, {
    nullable: false
  })
  create!: EventCreateWithoutPriorityInput;
}
