import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZoneWhereInput } from "../inputs/ZoneWhereInput";

@TypeGraphQL.InputType("ZoneListRelationFilter", {
  isAbstract: true
})
export class ZoneListRelationFilter {
  @TypeGraphQL.Field(_type => ZoneWhereInput, {
    nullable: true
  })
  every?: ZoneWhereInput | undefined;

  @TypeGraphQL.Field(_type => ZoneWhereInput, {
    nullable: true
  })
  some?: ZoneWhereInput | undefined;

  @TypeGraphQL.Field(_type => ZoneWhereInput, {
    nullable: true
  })
  none?: ZoneWhereInput | undefined;
}
