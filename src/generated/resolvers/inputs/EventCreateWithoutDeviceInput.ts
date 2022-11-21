import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriorityCreateNestedOneWithoutEventsInput } from "../inputs/PriorityCreateNestedOneWithoutEventsInput";

@TypeGraphQL.InputType("EventCreateWithoutDeviceInput", {
  isAbstract: true
})
export class EventCreateWithoutDeviceInput {
  @TypeGraphQL.Field(_type => PriorityCreateNestedOneWithoutEventsInput, {
    nullable: true
  })
  priority?: PriorityCreateNestedOneWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  moment?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | undefined;
}
