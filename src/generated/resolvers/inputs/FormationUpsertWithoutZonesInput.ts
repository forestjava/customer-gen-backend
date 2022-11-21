import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateWithoutZonesInput } from "../inputs/FormationCreateWithoutZonesInput";
import { FormationUpdateWithoutZonesInput } from "../inputs/FormationUpdateWithoutZonesInput";

@TypeGraphQL.InputType("FormationUpsertWithoutZonesInput", {
  isAbstract: true
})
export class FormationUpsertWithoutZonesInput {
  @TypeGraphQL.Field(_type => FormationUpdateWithoutZonesInput, {
    nullable: false
  })
  update!: FormationUpdateWithoutZonesInput;

  @TypeGraphQL.Field(_type => FormationCreateWithoutZonesInput, {
    nullable: false
  })
  create!: FormationCreateWithoutZonesInput;
}
