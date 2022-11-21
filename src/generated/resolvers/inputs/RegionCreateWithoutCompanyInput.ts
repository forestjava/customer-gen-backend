import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateNestedManyWithoutRegionInput } from "../inputs/FormationCreateNestedManyWithoutRegionInput";

@TypeGraphQL.InputType("RegionCreateWithoutCompanyInput", {
  isAbstract: true
})
export class RegionCreateWithoutCompanyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => FormationCreateNestedManyWithoutRegionInput, {
    nullable: true
  })
  formations?: FormationCreateNestedManyWithoutRegionInput | undefined;
}
