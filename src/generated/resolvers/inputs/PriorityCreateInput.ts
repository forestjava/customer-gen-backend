import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertCreateNestedManyWithoutPriorityInput } from "../inputs/AlertCreateNestedManyWithoutPriorityInput";
import { EventCreateNestedManyWithoutPriorityInput } from "../inputs/EventCreateNestedManyWithoutPriorityInput";

@TypeGraphQL.InputType("PriorityCreateInput", {
  isAbstract: true
})
export class PriorityCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => AlertCreateNestedManyWithoutPriorityInput, {
    nullable: true
  })
  alerts?: AlertCreateNestedManyWithoutPriorityInput | undefined;

  @TypeGraphQL.Field(_type => EventCreateNestedManyWithoutPriorityInput, {
    nullable: true
  })
  events?: EventCreateNestedManyWithoutPriorityInput | undefined;
}
