import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyUpdateOneWithoutRegionsNestedInput } from "../inputs/CompanyUpdateOneWithoutRegionsNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("RegionUpdateWithoutFormationsInput", {
  isAbstract: true
})
export class RegionUpdateWithoutFormationsInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateOneWithoutRegionsNestedInput, {
    nullable: true
  })
  company?: CompanyUpdateOneWithoutRegionsNestedInput | undefined;
}
