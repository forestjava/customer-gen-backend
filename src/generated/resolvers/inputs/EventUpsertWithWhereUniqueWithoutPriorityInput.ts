import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateWithoutPriorityInput } from "../inputs/EventCreateWithoutPriorityInput";
import { EventUpdateWithoutPriorityInput } from "../inputs/EventUpdateWithoutPriorityInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpsertWithWhereUniqueWithoutPriorityInput", {
  isAbstract: true
})
export class EventUpsertWithWhereUniqueWithoutPriorityInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventUpdateWithoutPriorityInput, {
    nullable: false
  })
  update!: EventUpdateWithoutPriorityInput;

  @TypeGraphQL.Field(_type => EventCreateWithoutPriorityInput, {
    nullable: false
  })
  create!: EventCreateWithoutPriorityInput;
}
