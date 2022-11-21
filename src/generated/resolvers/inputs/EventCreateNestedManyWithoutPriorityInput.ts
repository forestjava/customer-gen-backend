import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyPriorityInputEnvelope } from "../inputs/EventCreateManyPriorityInputEnvelope";
import { EventCreateOrConnectWithoutPriorityInput } from "../inputs/EventCreateOrConnectWithoutPriorityInput";
import { EventCreateWithoutPriorityInput } from "../inputs/EventCreateWithoutPriorityInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventCreateNestedManyWithoutPriorityInput", {
  isAbstract: true
})
export class EventCreateNestedManyWithoutPriorityInput {
  @TypeGraphQL.Field(_type => [EventCreateWithoutPriorityInput], {
    nullable: true
  })
  create?: EventCreateWithoutPriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutPriorityInput], {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutPriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => EventCreateManyPriorityInputEnvelope, {
    nullable: true
  })
  createMany?: EventCreateManyPriorityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  connect?: EventWhereUniqueInput[] | undefined;
}
