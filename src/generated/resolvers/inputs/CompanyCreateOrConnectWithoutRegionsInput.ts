import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateWithoutRegionsInput } from "../inputs/CompanyCreateWithoutRegionsInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyCreateOrConnectWithoutRegionsInput", {
  isAbstract: true
})
export class CompanyCreateOrConnectWithoutRegionsInput {
  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: false
  })
  where!: CompanyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CompanyCreateWithoutRegionsInput, {
    nullable: false
  })
  create!: CompanyCreateWithoutRegionsInput;
}
