import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyUpdateOneWithoutRegionsNestedInput } from "../inputs/CompanyUpdateOneWithoutRegionsNestedInput";
import { FormationUpdateManyWithoutRegionNestedInput } from "../inputs/FormationUpdateManyWithoutRegionNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("RegionUpdateInput", {
  isAbstract: true
})
export class RegionUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FormationUpdateManyWithoutRegionNestedInput, {
    nullable: true
  })
  formations?: FormationUpdateManyWithoutRegionNestedInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateOneWithoutRegionsNestedInput, {
    nullable: true
  })
  company?: CompanyUpdateOneWithoutRegionsNestedInput | undefined;
}
