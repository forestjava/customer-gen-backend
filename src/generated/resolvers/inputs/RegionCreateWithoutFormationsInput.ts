import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateNestedOneWithoutRegionsInput } from "../inputs/CompanyCreateNestedOneWithoutRegionsInput";

@TypeGraphQL.InputType("RegionCreateWithoutFormationsInput", {
  isAbstract: true
})
export class RegionCreateWithoutFormationsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateNestedOneWithoutRegionsInput, {
    nullable: true
  })
  company?: CompanyCreateNestedOneWithoutRegionsInput | undefined;
}
