import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateNestedManyWithoutCompanyInput } from "../inputs/RegionCreateNestedManyWithoutCompanyInput";

@TypeGraphQL.InputType("CompanyCreateInput", {
  isAbstract: true
})
export class CompanyCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  logo?: string | undefined;

  @TypeGraphQL.Field(_type => RegionCreateNestedManyWithoutCompanyInput, {
    nullable: true
  })
  regions?: RegionCreateNestedManyWithoutCompanyInput | undefined;
}
