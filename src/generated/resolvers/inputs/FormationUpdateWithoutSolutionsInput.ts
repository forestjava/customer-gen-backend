import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RegionUpdateOneWithoutFormationsNestedInput } from "../inputs/RegionUpdateOneWithoutFormationsNestedInput";
import { ZoneUpdateManyWithoutFormationNestedInput } from "../inputs/ZoneUpdateManyWithoutFormationNestedInput";

@TypeGraphQL.InputType("FormationUpdateWithoutSolutionsInput", {
  isAbstract: true
})
export class FormationUpdateWithoutSolutionsInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ZoneUpdateManyWithoutFormationNestedInput, {
    nullable: true
  })
  zones?: ZoneUpdateManyWithoutFormationNestedInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateOneWithoutFormationsNestedInput, {
    nullable: true
  })
  region?: RegionUpdateOneWithoutFormationsNestedInput | undefined;
}
