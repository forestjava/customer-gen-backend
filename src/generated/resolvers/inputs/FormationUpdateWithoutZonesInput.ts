import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RegionUpdateOneWithoutFormationsNestedInput } from "../inputs/RegionUpdateOneWithoutFormationsNestedInput";
import { SolutionUpdateManyWithoutFormationsNestedInput } from "../inputs/SolutionUpdateManyWithoutFormationsNestedInput";

@TypeGraphQL.InputType("FormationUpdateWithoutZonesInput", {
  isAbstract: true
})
export class FormationUpdateWithoutZonesInput {
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

  @TypeGraphQL.Field(_type => RegionUpdateOneWithoutFormationsNestedInput, {
    nullable: true
  })
  region?: RegionUpdateOneWithoutFormationsNestedInput | undefined;
}
