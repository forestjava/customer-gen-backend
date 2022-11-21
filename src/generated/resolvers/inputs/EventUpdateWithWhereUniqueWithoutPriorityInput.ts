import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventUpdateWithoutPriorityInput } from "../inputs/EventUpdateWithoutPriorityInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpdateWithWhereUniqueWithoutPriorityInput", {
  isAbstract: true
})
export class EventUpdateWithWhereUniqueWithoutPriorityInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventUpdateWithoutPriorityInput, {
    nullable: false
  })
  data!: EventUpdateWithoutPriorityInput;
}
