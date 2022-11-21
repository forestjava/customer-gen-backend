import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertCreateNestedManyWithoutPriorityInput } from "../inputs/AlertCreateNestedManyWithoutPriorityInput";

@TypeGraphQL.InputType("PriorityCreateWithoutEventsInput", {
  isAbstract: true
})
export class PriorityCreateWithoutEventsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => AlertCreateNestedManyWithoutPriorityInput, {
    nullable: true
  })
  alerts?: AlertCreateNestedManyWithoutPriorityInput | undefined;
}
