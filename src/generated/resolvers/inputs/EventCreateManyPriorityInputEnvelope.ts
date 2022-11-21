import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyPriorityInput } from "../inputs/EventCreateManyPriorityInput";

@TypeGraphQL.InputType("EventCreateManyPriorityInputEnvelope", {
  isAbstract: true
})
export class EventCreateManyPriorityInputEnvelope {
  @TypeGraphQL.Field(_type => [EventCreateManyPriorityInput], {
    nullable: false
  })
  data!: EventCreateManyPriorityInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
