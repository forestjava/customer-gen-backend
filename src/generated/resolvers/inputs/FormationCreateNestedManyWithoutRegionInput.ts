import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateManyRegionInputEnvelope } from "../inputs/FormationCreateManyRegionInputEnvelope";
import { FormationCreateOrConnectWithoutRegionInput } from "../inputs/FormationCreateOrConnectWithoutRegionInput";
import { FormationCreateWithoutRegionInput } from "../inputs/FormationCreateWithoutRegionInput";
import { FormationWhereUniqueInput } from "../inputs/FormationWhereUniqueInput";

@TypeGraphQL.InputType("FormationCreateNestedManyWithoutRegionInput", {
  isAbstract: true
})
export class FormationCreateNestedManyWithoutRegionInput {
  @TypeGraphQL.Field(_type => [FormationCreateWithoutRegionInput], {
    nullable: true
  })
  create?: FormationCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: FormationCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => FormationCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: FormationCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FormationWhereUniqueInput], {
    nullable: true
  })
  connect?: FormationWhereUniqueInput[] | undefined;
}
