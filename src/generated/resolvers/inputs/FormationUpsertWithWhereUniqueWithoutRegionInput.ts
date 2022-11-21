import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateWithoutRegionInput } from "../inputs/FormationCreateWithoutRegionInput";
import { FormationUpdateWithoutRegionInput } from "../inputs/FormationUpdateWithoutRegionInput";
import { FormationWhereUniqueInput } from "../inputs/FormationWhereUniqueInput";

@TypeGraphQL.InputType("FormationUpsertWithWhereUniqueWithoutRegionInput", {
  isAbstract: true
})
export class FormationUpsertWithWhereUniqueWithoutRegionInput {
  @TypeGraphQL.Field(_type => FormationWhereUniqueInput, {
    nullable: false
  })
  where!: FormationWhereUniqueInput;

  @TypeGraphQL.Field(_type => FormationUpdateWithoutRegionInput, {
    nullable: false
  })
  update!: FormationUpdateWithoutRegionInput;

  @TypeGraphQL.Field(_type => FormationCreateWithoutRegionInput, {
    nullable: false
  })
  create!: FormationCreateWithoutRegionInput;
}
