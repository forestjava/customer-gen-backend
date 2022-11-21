import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CompanyCreateOrConnectWithoutRegionsInput } from "../inputs/CompanyCreateOrConnectWithoutRegionsInput";
import { CompanyCreateWithoutRegionsInput } from "../inputs/CompanyCreateWithoutRegionsInput";
import { CompanyUpdateWithoutRegionsInput } from "../inputs/CompanyUpdateWithoutRegionsInput";
import { CompanyUpsertWithoutRegionsInput } from "../inputs/CompanyUpsertWithoutRegionsInput";
import { CompanyWhereUniqueInput } from "../inputs/CompanyWhereUniqueInput";

@TypeGraphQL.InputType("CompanyUpdateOneWithoutRegionsNestedInput", {
  isAbstract: true
})
export class CompanyUpdateOneWithoutRegionsNestedInput {
  @TypeGraphQL.Field(_type => CompanyCreateWithoutRegionsInput, {
    nullable: true
  })
  create?: CompanyCreateWithoutRegionsInput | undefined;

  @TypeGraphQL.Field(_type => CompanyCreateOrConnectWithoutRegionsInput, {
    nullable: true
  })
  connectOrCreate?: CompanyCreateOrConnectWithoutRegionsInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpsertWithoutRegionsInput, {
    nullable: true
  })
  upsert?: CompanyUpsertWithoutRegionsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CompanyWhereUniqueInput, {
    nullable: true
  })
  connect?: CompanyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CompanyUpdateWithoutRegionsInput, {
    nullable: true
  })
  update?: CompanyUpdateWithoutRegionsInput | undefined;
}
