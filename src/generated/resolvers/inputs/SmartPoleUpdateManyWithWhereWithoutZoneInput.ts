import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleScalarWhereInput } from "../inputs/SmartPoleScalarWhereInput";
import { SmartPoleUpdateManyMutationInput } from "../inputs/SmartPoleUpdateManyMutationInput";

@TypeGraphQL.InputType("SmartPoleUpdateManyWithWhereWithoutZoneInput", {
  isAbstract: true
})
export class SmartPoleUpdateManyWithWhereWithoutZoneInput {
  @TypeGraphQL.Field(_type => SmartPoleScalarWhereInput, {
    nullable: false
  })
  where!: SmartPoleScalarWhereInput;

  @TypeGraphQL.Field(_type => SmartPoleUpdateManyMutationInput, {
    nullable: false
  })
  data!: SmartPoleUpdateManyMutationInput;
}
