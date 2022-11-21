import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateNestedOneWithoutRegionsInput } from "../inputs/CompanyCreateNestedOneWithoutRegionsInput";
import { FormationCreateNestedManyWithoutRegionInput } from "../inputs/FormationCreateNestedManyWithoutRegionInput";

@TypeGraphQL.InputType("RegionCreateInput", {
  isAbstract: true
})
export class RegionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => FormationCreateNestedManyWithoutRegionInput, {
    nullable: true
  })
  formations?: FormationCreateNestedManyWithoutRegionInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutRegionsInput, {
    nullable: true
  })
  company?: CompanyCreateNestedOneWithoutRegionsInput | undefined;
}
