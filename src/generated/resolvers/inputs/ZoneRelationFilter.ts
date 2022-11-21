import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZoneWhereInput } from "../inputs/ZoneWhereInput";

@TypeGraphQL.InputType("ZoneRelationFilter", {
  isAbstract: true
})
export class ZoneRelationFilter {
  @TypeGraphQL.Field(_type => ZoneWhereInput, {
    nullable: true
  })
  is?: ZoneWhereInput | undefined;

  @TypeGraphQL.Field(_type => ZoneWhereInput, {
    nullable: true
  })
  isNot?: ZoneWhereInput | undefined;
}
