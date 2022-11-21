import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleWhereInput } from "../inputs/SmartPoleWhereInput";

@TypeGraphQL.InputType("SmartPoleRelationFilter", {
  isAbstract: true
})
export class SmartPoleRelationFilter {
  @TypeGraphQL.Field(_type => SmartPoleWhereInput, {
    nullable: true
  })
  is?: SmartPoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleWhereInput, {
    nullable: true
  })
  isNot?: SmartPoleWhereInput | undefined;
}
