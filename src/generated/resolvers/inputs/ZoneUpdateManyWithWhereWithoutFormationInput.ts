import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZoneScalarWhereInput } from "../inputs/ZoneScalarWhereInput";
import { ZoneUpdateManyMutationInput } from "../inputs/ZoneUpdateManyMutationInput";

@TypeGraphQL.InputType("ZoneUpdateManyWithWhereWithoutFormationInput", {
  isAbstract: true
})
export class ZoneUpdateManyWithWhereWithoutFormationInput {
  @TypeGraphQL.Field(_type => ZoneScalarWhereInput, {
    nullable: false
  })
  where!: ZoneScalarWhereInput;

  @TypeGraphQL.Field(_type => ZoneUpdateManyMutationInput, {
    nullable: false
  })
  data!: ZoneUpdateManyMutationInput;
}
