import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleWhereInput } from "../inputs/SmartPoleWhereInput";

@TypeGraphQL.InputType("SmartPoleListRelationFilter", {
  isAbstract: true
})
export class SmartPoleListRelationFilter {
  @TypeGraphQL.Field(_type => SmartPoleWhereInput, {
    nullable: true
  })
  every?: SmartPoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleWhereInput, {
    nullable: true
  })
  some?: SmartPoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleWhereInput, {
    nullable: true
  })
  none?: SmartPoleWhereInput | undefined;
}
