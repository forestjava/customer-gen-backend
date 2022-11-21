import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationWhereInput } from "../inputs/FormationWhereInput";

@TypeGraphQL.InputType("FormationListRelationFilter", {
  isAbstract: true
})
export class FormationListRelationFilter {
  @TypeGraphQL.Field(_type => FormationWhereInput, {
    nullable: true
  })
  every?: FormationWhereInput | undefined;

  @TypeGraphQL.Field(_type => FormationWhereInput, {
    nullable: true
  })
  some?: FormationWhereInput | undefined;

  @TypeGraphQL.Field(_type => FormationWhereInput, {
    nullable: true
  })
  none?: FormationWhereInput | undefined;
}
