import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SolutionUpdateManyWithoutFormationsNestedInput } from "../inputs/SolutionUpdateManyWithoutFormationsNestedInput";
import { ZoneUpdateManyWithoutFormationNestedInput } from "../inputs/ZoneUpdateManyWithoutFormationNestedInput";

@TypeGraphQL.InputType("FormationUpdateWithoutRegionInput", {
  isAbstract: true
})
export class FormationUpdateWithoutRegionInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SolutionUpdateManyWithoutFormationsNestedInput, {
    nullable: true
  })
  solutions?: SolutionUpdateManyWithoutFormationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ZoneUpdateManyWithoutFormationNestedInput, {
    nullable: true
  })
  zones?: ZoneUpdateManyWithoutFormationNestedInput | undefined;
}
