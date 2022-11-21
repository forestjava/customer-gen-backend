import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateOrConnectWithoutZonesInput } from "../inputs/FormationCreateOrConnectWithoutZonesInput";
import { FormationCreateWithoutZonesInput } from "../inputs/FormationCreateWithoutZonesInput";
import { FormationWhereUniqueInput } from "../inputs/FormationWhereUniqueInput";

@TypeGraphQL.InputType("FormationCreateNestedOneWithoutZonesInput", {
  isAbstract: true
})
export class FormationCreateNestedOneWithoutZonesInput {
  @TypeGraphQL.Field(_type => FormationCreateWithoutZonesInput, {
    nullable: true
  })
  create?: FormationCreateWithoutZonesInput | undefined;

  @TypeGraphQL.Field(_type => FormationCreateOrConnectWithoutZonesInput, {
    nullable: true
  })
  connectOrCreate?: FormationCreateOrConnectWithoutZonesInput | undefined;

  @TypeGraphQL.Field(_type => FormationWhereUniqueInput, {
    nullable: true
  })
  connect?: FormationWhereUniqueInput | undefined;
}
