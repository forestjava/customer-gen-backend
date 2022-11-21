import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationWhereInput } from "../inputs/FormationWhereInput";

@TypeGraphQL.InputType("FormationRelationFilter", {
  isAbstract: true
})
export class FormationRelationFilter {
  @TypeGraphQL.Field(_type => FormationWhereInput, {
    nullable: true
  })
  is?: FormationWhereInput | undefined;

  @TypeGraphQL.Field(_type => FormationWhereInput, {
    nullable: true
  })
  isNot?: FormationWhereInput | undefined;
}
