import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertCreateManyPriorityInputEnvelope } from "../inputs/AlertCreateManyPriorityInputEnvelope";
import { AlertCreateOrConnectWithoutPriorityInput } from "../inputs/AlertCreateOrConnectWithoutPriorityInput";
import { AlertCreateWithoutPriorityInput } from "../inputs/AlertCreateWithoutPriorityInput";
import { AlertScalarWhereInput } from "../inputs/AlertScalarWhereInput";
import { AlertUpdateManyWithWhereWithoutPriorityInput } from "../inputs/AlertUpdateManyWithWhereWithoutPriorityInput";
import { AlertUpdateWithWhereUniqueWithoutPriorityInput } from "../inputs/AlertUpdateWithWhereUniqueWithoutPriorityInput";
import { AlertUpsertWithWhereUniqueWithoutPriorityInput } from "../inputs/AlertUpsertWithWhereUniqueWithoutPriorityInput";
import { AlertWhereUniqueInput } from "../inputs/AlertWhereUniqueInput";

@TypeGraphQL.InputType("AlertUpdateManyWithoutPriorityNestedInput", {
  isAbstract: true
})
export class AlertUpdateManyWithoutPriorityNestedInput {
  @TypeGraphQL.Field(_type => [AlertCreateWithoutPriorityInput], {
    nullable: true
  })
  create?: AlertCreateWithoutPriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertCreateOrConnectWithoutPriorityInput], {
    nullable: true
  })
  connectOrCreate?: AlertCreateOrConnectWithoutPriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertUpsertWithWhereUniqueWithoutPriorityInput], {
    nullable: true
  })
  upsert?: AlertUpsertWithWhereUniqueWithoutPriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => AlertCreateManyPriorityInputEnvelope, {
    nullable: true
  })
  createMany?: AlertCreateManyPriorityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AlertWhereUniqueInput], {
    nullable: true
  })
  set?: AlertWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AlertWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertWhereUniqueInput], {
    nullable: true
  })
  delete?: AlertWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertWhereUniqueInput], {
    nullable: true
  })
  connect?: AlertWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertUpdateWithWhereUniqueWithoutPriorityInput], {
    nullable: true
  })
  update?: AlertUpdateWithWhereUniqueWithoutPriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertUpdateManyWithWhereWithoutPriorityInput], {
    nullable: true
  })
  updateMany?: AlertUpdateManyWithWhereWithoutPriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AlertScalarWhereInput[] | undefined;
}
