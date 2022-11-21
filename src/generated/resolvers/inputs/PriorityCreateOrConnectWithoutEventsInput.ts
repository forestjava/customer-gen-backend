import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriorityCreateWithoutEventsInput } from "../inputs/PriorityCreateWithoutEventsInput";
import { PriorityWhereUniqueInput } from "../inputs/PriorityWhereUniqueInput";

@TypeGraphQL.InputType("PriorityCreateOrConnectWithoutEventsInput", {
  isAbstract: true
})
export class PriorityCreateOrConnectWithoutEventsInput {
  @TypeGraphQL.Field(_type => PriorityWhereUniqueInput, {
    nullable: false
  })
  where!: PriorityWhereUniqueInput;

  @TypeGraphQL.Field(_type => PriorityCreateWithoutEventsInput, {
    nullable: false
  })
  create!: PriorityCreateWithoutEventsInput;
}
