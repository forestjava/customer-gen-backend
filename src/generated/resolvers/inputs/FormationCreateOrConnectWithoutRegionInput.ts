import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateWithoutRegionInput } from "../inputs/FormationCreateWithoutRegionInput";
import { FormationWhereUniqueInput } from "../inputs/FormationWhereUniqueInput";

@TypeGraphQL.InputType("FormationCreateOrConnectWithoutRegionInput", {
  isAbstract: true
})
export class FormationCreateOrConnectWithoutRegionInput {
  @TypeGraphQL.Field(_type => FormationWhereUniqueInput, {
    nullable: false
  })
  where!: FormationWhereUniqueInput;

  @TypeGraphQL.Field(_type => FormationCreateWithoutRegionInput, {
    nullable: false
  })
  create!: FormationCreateWithoutRegionInput;
}
