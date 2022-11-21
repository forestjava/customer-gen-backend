import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationUpdateManyWithoutRegionNestedInput } from "../inputs/FormationUpdateManyWithoutRegionNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("RegionUpdateWithoutCompanyInput", {
  isAbstract: true
})
export class RegionUpdateWithoutCompanyInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FormationUpdateManyWithoutRegionNestedInput, {
    nullable: true
  })
  formations?: FormationUpdateManyWithoutRegionNestedInput | undefined;
}
