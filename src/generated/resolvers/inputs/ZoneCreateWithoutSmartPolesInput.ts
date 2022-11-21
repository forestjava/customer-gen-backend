import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateNestedOneWithoutZonesInput } from "../inputs/FormationCreateNestedOneWithoutZonesInput";

@TypeGraphQL.InputType("ZoneCreateWithoutSmartPolesInput", {
  isAbstract: true
})
export class ZoneCreateWithoutSmartPolesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => FormationCreateNestedOneWithoutZonesInput, {
    nullable: true
  })
  formation?: FormationCreateNestedOneWithoutZonesInput | undefined;
}
