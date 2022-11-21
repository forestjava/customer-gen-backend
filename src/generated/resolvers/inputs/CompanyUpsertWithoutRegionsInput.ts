import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateWithoutRegionsInput } from "../inputs/CompanyCreateWithoutRegionsInput";
import { CompanyUpdateWithoutRegionsInput } from "../inputs/CompanyUpdateWithoutRegionsInput";

@TypeGraphQL.InputType("CompanyUpsertWithoutRegionsInput", {
  isAbstract: true
})
export class CompanyUpsertWithoutRegionsInput {
  @TypeGraphQL.Field(_type => CompanyUpdateWithoutRegionsInput, {
    nullable: false
  })
  update!: CompanyUpdateWithoutRegionsInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutRegionsInput, {
    nullable: false
  })
  create!: CompanyCreateWithoutRegionsInput;
}
