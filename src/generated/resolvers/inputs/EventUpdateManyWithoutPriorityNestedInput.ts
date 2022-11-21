import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyPriorityInputEnvelope } from "../inputs/EventCreateManyPriorityInputEnvelope";
import { EventCreateOrConnectWithoutPriorityInput } from "../inputs/EventCreateOrConnectWithoutPriorityInput";
import { EventCreateWithoutPriorityInput } from "../inputs/EventCreateWithoutPriorityInput";
import { EventScalarWhereInput } from "../inputs/EventScalarWhereInput";
import { EventUpdateManyWithWhereWithoutPriorityInput } from "../inputs/EventUpdateManyWithWhereWithoutPriorityInput";
import { EventUpdateWithWhereUniqueWithoutPriorityInput } from "../inputs/EventUpdateWithWhereUniqueWithoutPriorityInput";
import { EventUpsertWithWhereUniqueWithoutPriorityInput } from "../inputs/EventUpsertWithWhereUniqueWithoutPriorityInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpdateManyWithoutPriorityNestedInput", {
  isAbstract: true
})
export class EventUpdateManyWithoutPriorityNestedInput {
  @TypeGraphQL.Field(_type => [EventCreateWithoutPriorityInput], {
    nullable: true
  })
  create?: EventCreateWithoutPriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutPriorityInput], {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutPriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpsertWithWhereUniqueWithoutPriorityInput], {
    nullable: true
  })
  upsert?: EventUpsertWithWhereUniqueWithoutPriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => EventCreateManyPriorityInputEnvelope, {
    nullable: true
  })
  createMany?: EventCreateManyPriorityInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [EventUpdateWithWhereUniqueWithoutPriorityInput], {
    nullable: true
  })
  update?: EventUpdateWithWhereUniqueWithoutPriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpdateManyWithWhereWithoutPriorityInput], {
    nullable: true
  })
  updateMany?: EventUpdateManyWithWhereWithoutPriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EventScalarWhereInput[] | undefined;
}
