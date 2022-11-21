import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateNestedOneWithoutEventsInput } from "../inputs/DeviceCreateNestedOneWithoutEventsInput";
import { PriorityCreateNestedOneWithoutEventsInput } from "../inputs/PriorityCreateNestedOneWithoutEventsInput";

@TypeGraphQL.InputType("EventCreateInput", {
  isAbstract: true
})
export class EventCreateInput {
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

  @TypeGraphQL.Field(_type => DeviceCreateNestedOneWithoutEventsInput, {
    nullable: true
  })
  device?: DeviceCreateNestedOneWithoutEventsInput | undefined;
}
