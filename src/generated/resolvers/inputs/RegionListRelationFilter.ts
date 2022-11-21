import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionWhereInput } from "../inputs/RegionWhereInput";

@TypeGraphQL.InputType("RegionListRelationFilter", {
  isAbstract: true
})
export class RegionListRelationFilter {
  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  every?: RegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  some?: RegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereInput, {
    nullable: true
  })
  none?: RegionWhereInput | undefined;
}
