import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateWithoutCompanyInput } from "../inputs/RegionCreateWithoutCompanyInput";
import { RegionUpdateWithoutCompanyInput } from "../inputs/RegionUpdateWithoutCompanyInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionUpsertWithWhereUniqueWithoutCompanyInput", {
  isAbstract: true
})
export class RegionUpsertWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: false
  })
  where!: RegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionUpdateWithoutCompanyInput, {
    nullable: false
  })
  update!: RegionUpdateWithoutCompanyInput;

  @TypeGraphQL.Field(_type => RegionCreateWithoutCompanyInput, {
    nullable: false
  })
  create!: RegionCreateWithoutCompanyInput;
}
