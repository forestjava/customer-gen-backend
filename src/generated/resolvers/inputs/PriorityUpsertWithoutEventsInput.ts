import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriorityCreateWithoutEventsInput } from "../inputs/PriorityCreateWithoutEventsInput";
import { PriorityUpdateWithoutEventsInput } from "../inputs/PriorityUpdateWithoutEventsInput";

@TypeGraphQL.InputType("PriorityUpsertWithoutEventsInput", {
  isAbstract: true
})
export class PriorityUpsertWithoutEventsInput {
  @TypeGraphQL.Field(_type => PriorityUpdateWithoutEventsInput, {
    nullable: false
  })
  update!: PriorityUpdateWithoutEventsInput;

  @TypeGraphQL.Field(_type => PriorityCreateWithoutEventsInput, {
    nullable: false
  })
  create!: PriorityCreateWithoutEventsInput;
}
