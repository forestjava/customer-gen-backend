import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyDeviceInput } from "../inputs/EventCreateManyDeviceInput";

@TypeGraphQL.InputType("EventCreateManyDeviceInputEnvelope", {
  isAbstract: true
})
export class EventCreateManyDeviceInputEnvelope {
  @TypeGraphQL.Field(_type => [EventCreateManyDeviceInput], {
    nullable: false
  })
  data!: EventCreateManyDeviceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
