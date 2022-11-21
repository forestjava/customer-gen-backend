import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateOrConnectWithoutSolutionsInput } from "../inputs/FormationCreateOrConnectWithoutSolutionsInput";
import { FormationCreateWithoutSolutionsInput } from "../inputs/FormationCreateWithoutSolutionsInput";
import { FormationWhereUniqueInput } from "../inputs/FormationWhereUniqueInput";

@TypeGraphQL.InputType("FormationCreateNestedManyWithoutSolutionsInput", {
  isAbstract: true
})
export class FormationCreateNestedManyWithoutSolutionsInput {
  @TypeGraphQL.Field(_type => [FormationCreateWithoutSolutionsInput], {
    nullable: true
  })
  create?: FormationCreateWithoutSolutionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationCreateOrConnectWithoutSolutionsInput], {
    nullable: true
  })
  connectOrCreate?: FormationCreateOrConnectWithoutSolutionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationWhereUniqueInput], {
    nullable: true
  })
  connect?: FormationWhereUniqueInput[] | undefined;
}
