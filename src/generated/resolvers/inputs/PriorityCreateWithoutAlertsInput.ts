import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateNestedManyWithoutPriorityInput } from "../inputs/EventCreateNestedManyWithoutPriorityInput";

@TypeGraphQL.InputType("PriorityCreateWithoutAlertsInput", {
  isAbstract: true
})
export class PriorityCreateWithoutAlertsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => EventCreateNestedManyWithoutPriorityInput, {
    nullable: true
  })
  events?: EventCreateNestedManyWithoutPriorityInput | undefined;
}
