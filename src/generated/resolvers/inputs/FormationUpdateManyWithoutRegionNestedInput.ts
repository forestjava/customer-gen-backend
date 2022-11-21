import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateManyRegionInputEnvelope } from "../inputs/FormationCreateManyRegionInputEnvelope";
import { FormationCreateOrConnectWithoutRegionInput } from "../inputs/FormationCreateOrConnectWithoutRegionInput";
import { FormationCreateWithoutRegionInput } from "../inputs/FormationCreateWithoutRegionInput";
import { FormationScalarWhereInput } from "../inputs/FormationScalarWhereInput";
import { FormationUpdateManyWithWhereWithoutRegionInput } from "../inputs/FormationUpdateManyWithWhereWithoutRegionInput";
import { FormationUpdateWithWhereUniqueWithoutRegionInput } from "../inputs/FormationUpdateWithWhereUniqueWithoutRegionInput";
import { FormationUpsertWithWhereUniqueWithoutRegionInput } from "../inputs/FormationUpsertWithWhereUniqueWithoutRegionInput";
import { FormationWhereUniqueInput } from "../inputs/FormationWhereUniqueInput";

@TypeGraphQL.InputType("FormationUpdateManyWithoutRegionNestedInput", {
  isAbstract: true
})
export class FormationUpdateManyWithoutRegionNestedInput {
  @TypeGraphQL.Field(_type => [FormationCreateWithoutRegionInput], {
    nullable: true
  })
  create?: FormationCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: FormationCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationUpsertWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  upsert?: FormationUpsertWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => FormationCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: FormationCreateManyRegionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FormationWhereUniqueInput], {
    nullable: true
  })
  set?: FormationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FormationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationWhereUniqueInput], {
    nullable: true
  })
  delete?: FormationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationWhereUniqueInput], {
    nullable: true
  })
  connect?: FormationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationUpdateWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  update?: FormationUpdateWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationUpdateManyWithWhereWithoutRegionInput], {
    nullable: true
  })
  updateMany?: FormationUpdateManyWithWhereWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FormationScalarWhereInput[] | undefined;
}
