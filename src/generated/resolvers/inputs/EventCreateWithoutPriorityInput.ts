import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateNestedOneWithoutEventsInput } from "../inputs/DeviceCreateNestedOneWithoutEventsInput";

@TypeGraphQL.InputType("EventCreateWithoutPriorityInput", {
  isAbstract: true
})
export class EventCreateWithoutPriorityInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  moment?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | undefined;

  @TypeGraphQL.Field(_type => DeviceCreateNestedOneWithoutEventsInput, {
    nullable: true
  })
  device?: DeviceCreateNestedOneWithoutEventsInput | undefined;
}
