import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutRegionsInput } from "../inputs/CompanyCreateOrConnectWithoutRegionsInput";
import { CompanyCreateWithoutRegionsInput } from "../inputs/CompanyCreateWithoutRegionsInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyCreateNestedOneWithoutRegionsInput", {
  isAbstract: true
})
export class CompanyCreateNestedOneWithoutRegionsInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutRegionsInput, {
    nullable: true
  })
  create?: CompanyCreateWithoutRegionsInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutRegionsInput, {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutRegionsInput | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput | undefined;
}
