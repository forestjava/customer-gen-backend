import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationUpdateWithoutRegionInput } from "../inputs/FormationUpdateWithoutRegionInput";
import { FormationWhereUniqueInput } from "../inputs/FormationWhereUniqueInput";

@TypeGraphQL.InputType("FormationUpdateWithWhereUniqueWithoutRegionInput", {
  isAbstract: true
})
export class FormationUpdateWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => FormationWhereUniqueInput, {
    nullable: false
  })
  where!: FormationWhereUniqueInput;

  @TypeGraphQL.Field(_type => FormationUpdateWithoutRegionInput, {
    nullable: false
  })
  data!: FormationUpdateWithoutRegionInput;
}
