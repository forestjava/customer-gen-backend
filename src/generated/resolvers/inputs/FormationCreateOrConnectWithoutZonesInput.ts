import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateWithoutZonesInput } from "../inputs/FormationCreateWithoutZonesInput";
import { FormationWhereUniqueInput } from "../inputs/FormationWhereUniqueInput";

@TypeGraphQL.InputType("FormationCreateOrConnectWithoutZonesInput", {
  isAbstract: true
})
export class FormationCreateOrConnectWithoutZonesInput {
  @TypeGraphQL.Field(_type => FormationWhereUniqueInput, {
    nullable: false
  })
  where!: FormationWhereUniqueInput;

  @TypeGraphQL.Field(_type => FormationCreateWithoutZonesInput, {
    nullable: false
  })
  create!: FormationCreateWithoutZonesInput;
}
