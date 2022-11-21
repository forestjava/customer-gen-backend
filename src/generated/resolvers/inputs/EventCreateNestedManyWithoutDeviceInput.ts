import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyDeviceInputEnvelope } from "../inputs/EventCreateManyDeviceInputEnvelope";
import { EventCreateOrConnectWithoutDeviceInput } from "../inputs/EventCreateOrConnectWithoutDeviceInput";
import { EventCreateWithoutDeviceInput } from "../inputs/EventCreateWithoutDeviceInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventCreateNestedManyWithoutDeviceInput", {
  isAbstract: true
})
export class EventCreateNestedManyWithoutDeviceInput {
  @TypeGraphQL.Field(_type => [EventCreateWithoutDeviceInput], {
    nullable: true
  })
  create?: EventCreateWithoutDeviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutDeviceInput], {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutDeviceInput[] | undefined;

  @TypeGraphQL.Field(_type => EventCreateManyDeviceInputEnvelope, {
    nullable: true
  })
  createMany?: EventCreateManyDeviceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  connect?: EventWhereUniqueInput[] | undefined;
}
