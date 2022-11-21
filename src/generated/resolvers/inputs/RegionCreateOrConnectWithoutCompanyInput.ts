import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateWithoutCompanyInput } from "../inputs/RegionCreateWithoutCompanyInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionCreateOrConnectWithoutCompanyInput", {
  isAbstract: true
})
export class RegionCreateOrConnectWithoutCompanyInput {
  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: false
  })
  where!: RegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionCreateWithoutCompanyInput, {
    nullable: false
  })
  create!: RegionCreateWithoutCompanyInput;
}
