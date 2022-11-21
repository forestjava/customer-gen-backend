import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyDeviceInputEnvelope } from "../inputs/EventCreateManyDeviceInputEnvelope";
import { EventCreateOrConnectWithoutDeviceInput } from "../inputs/EventCreateOrConnectWithoutDeviceInput";
import { EventCreateWithoutDeviceInput } from "../inputs/EventCreateWithoutDeviceInput";
import { EventScalarWhereInput } from "../inputs/EventScalarWhereInput";
import { EventUpdateManyWithWhereWithoutDeviceInput } from "../inputs/EventUpdateManyWithWhereWithoutDeviceInput";
import { EventUpdateWithWhereUniqueWithoutDeviceInput } from "../inputs/EventUpdateWithWhereUniqueWithoutDeviceInput";
import { EventUpsertWithWhereUniqueWithoutDeviceInput } from "../inputs/EventUpsertWithWhereUniqueWithoutDeviceInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpdateManyWithoutDeviceNestedInput", {
  isAbstract: true
})
export class EventUpdateManyWithoutDeviceNestedInput {
  @TypeGraphQL.Field(_type => [EventCreateWithoutDeviceInput], {
    nullable: true
  })
  create?: EventCreateWithoutDeviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutDeviceInput], {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutDeviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpsertWithWhereUniqueWithoutDeviceInput], {
    nullable: true
  })
  upsert?: EventUpsertWithWhereUniqueWithoutDeviceInput[] | undefined;

  @TypeGraphQL.Field(_type => EventCreateManyDeviceInputEnvelope, {
    nullable: true
  })
  createMany?: EventCreateManyDeviceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  set?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  delete?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  connect?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpdateWithWhereUniqueWithoutDeviceInput], {
    nullable: true
  })
  update?: EventUpdateWithWhereUniqueWithoutDeviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpdateManyWithWhereWithoutDeviceInput], {
    nullable: true
  })
  updateMany?: EventUpdateManyWithWhereWithoutDeviceInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EventScalarWhereInput[] | undefined;
}
