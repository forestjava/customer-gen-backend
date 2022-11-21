import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriorityCreateOrConnectWithoutEventsInput } from "../inputs/PriorityCreateOrConnectWithoutEventsInput";
import { PriorityCreateWithoutEventsInput } from "../inputs/PriorityCreateWithoutEventsInput";
import { PriorityWhereUniqueInput } from "../inputs/PriorityWhereUniqueInput";

@TypeGraphQL.InputType("PriorityCreateNestedOneWithoutEventsInput", {
  isAbstract: true
})
export class PriorityCreateNestedOneWithoutEventsInput {
  @TypeGraphQL.Field(_type => PriorityCreateWithoutEventsInput, {
    nullable: true
  })
  create?: PriorityCreateWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => PriorityCreateOrConnectWithoutEventsInput, {
    nullable: true
  })
  connectOrCreate?: PriorityCreateOrConnectWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => PriorityWhereUniqueInput, {
    nullable: true
  })
  connect?: PriorityWhereUniqueInput | undefined;
}
