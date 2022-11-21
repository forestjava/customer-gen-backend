import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventScalarWhereInput } from "../inputs/EventScalarWhereInput";
import { EventUpdateManyMutationInput } from "../inputs/EventUpdateManyMutationInput";

@TypeGraphQL.InputType("EventUpdateManyWithWhereWithoutPriorityInput", {
  isAbstract: true
})
export class EventUpdateManyWithWhereWithoutPriorityInput {
  @TypeGraphQL.Field(_type => EventScalarWhereInput, {
    nullable: false
  })
  where!: EventScalarWhereInput;

  @TypeGraphQL.Field(_type => EventUpdateManyMutationInput, {
    nullable: false
  })
  data!: EventUpdateManyMutationInput;
}
