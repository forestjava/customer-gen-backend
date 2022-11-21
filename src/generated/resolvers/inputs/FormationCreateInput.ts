import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateNestedOneWithoutFormationsInput } from "../inputs/RegionCreateNestedOneWithoutFormationsInput";
import { SolutionCreateNestedManyWithoutFormationsInput } from "../inputs/SolutionCreateNestedManyWithoutFormationsInput";
import { ZoneCreateNestedManyWithoutFormationInput } from "../inputs/ZoneCreateNestedManyWithoutFormationInput";

@TypeGraphQL.InputType("FormationCreateInput", {
  isAbstract: true
})
export class FormationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => SolutionCreateNestedManyWithoutFormationsInput, {
    nullable: true
  })
  solutions?: SolutionCreateNestedManyWithoutFormationsInput | undefined;

  @TypeGraphQL.Field(_type => ZoneCreateNestedManyWithoutFormationInput, {
    nullable: true
  })
  zones?: ZoneCreateNestedManyWithoutFormationInput | undefined;

  @TypeGraphQL.Field(_type => RegionCreateNestedOneWithoutFormationsInput, {
    nullable: true
  })
  region?: RegionCreateNestedOneWithoutFormationsInput | undefined;
}
