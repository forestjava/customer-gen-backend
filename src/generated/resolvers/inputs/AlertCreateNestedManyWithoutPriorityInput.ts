import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertCreateManyPriorityInputEnvelope } from "../inputs/AlertCreateManyPriorityInputEnvelope";
import { AlertCreateOrConnectWithoutPriorityInput } from "../inputs/AlertCreateOrConnectWithoutPriorityInput";
import { AlertCreateWithoutPriorityInput } from "../inputs/AlertCreateWithoutPriorityInput";
import { AlertWhereUniqueInput } from "../inputs/AlertWhereUniqueInput";

@TypeGraphQL.InputType("AlertCreateNestedManyWithoutPriorityInput", {
  isAbstract: true
})
export class AlertCreateNestedManyWithoutPriorityInput {
  @TypeGraphQL.Field(_type => [AlertCreateWithoutPriorityInput], {
    nullable: true
  })
  create?: AlertCreateWithoutPriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertCreateOrConnectWithoutPriorityInput], {
    nullable: true
  })
  connectOrCreate?: AlertCreateOrConnectWithoutPriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => AlertCreateManyPriorityInputEnvelope, {
    nullable: true
  })
  createMany?: AlertCreateManyPriorityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AlertWhereUniqueInput], {
    nullable: true
  })
  connect?: AlertWhereUniqueInput[] | undefined;
}
