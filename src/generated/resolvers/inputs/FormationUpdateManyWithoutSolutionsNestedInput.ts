import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateOrConnectWithoutSolutionsInput } from "../inputs/FormationCreateOrConnectWithoutSolutionsInput";
import { FormationCreateWithoutSolutionsInput } from "../inputs/FormationCreateWithoutSolutionsInput";
import { FormationScalarWhereInput } from "../inputs/FormationScalarWhereInput";
import { FormationUpdateManyWithWhereWithoutSolutionsInput } from "../inputs/FormationUpdateManyWithWhereWithoutSolutionsInput";
import { FormationUpdateWithWhereUniqueWithoutSolutionsInput } from "../inputs/FormationUpdateWithWhereUniqueWithoutSolutionsInput";
import { FormationUpsertWithWhereUniqueWithoutSolutionsInput } from "../inputs/FormationUpsertWithWhereUniqueWithoutSolutionsInput";
import { FormationWhereUniqueInput } from "../inputs/FormationWhereUniqueInput";

@TypeGraphQL.InputType("FormationUpdateManyWithoutSolutionsNestedInput", {
  isAbstract: true
})
export class FormationUpdateManyWithoutSolutionsNestedInput {
  @TypeGraphQL.Field(_type => [FormationCreateWithoutSolutionsInput], {
    nullable: true
  })
  create?: FormationCreateWithoutSolutionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationCreateOrConnectWithoutSolutionsInput], {
    nullable: true
  })
  connectOrCreate?: FormationCreateOrConnectWithoutSolutionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationUpsertWithWhereUniqueWithoutSolutionsInput], {
    nullable: true
  })
  upsert?: FormationUpsertWithWhereUniqueWithoutSolutionsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [FormationUpdateWithWhereUniqueWithoutSolutionsInput], {
    nullable: true
  })
  update?: FormationUpdateWithWhereUniqueWithoutSolutionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationUpdateManyWithWhereWithoutSolutionsInput], {
    nullable: true
  })
  updateMany?: FormationUpdateManyWithWhereWithoutSolutionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FormationScalarWhereInput[] | undefined;
}
