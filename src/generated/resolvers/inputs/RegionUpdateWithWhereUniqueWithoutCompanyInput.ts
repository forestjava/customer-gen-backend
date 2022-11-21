import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionUpdateWithoutCompanyInput } from "../inputs/RegionUpdateWithoutCompanyInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionUpdateWithWhereUniqueWithoutCompanyInput", {
  isAbstract: true
})
export class RegionUpdateWithWhereUniqueWithoutCompanyInput {
  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: false
  })
  where!: RegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionUpdateWithoutCompanyInput, {
    nullable: false
  })
  data!: RegionUpdateWithoutCompanyInput;
}
