import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriorityWhereInput } from "../inputs/PriorityWhereInput";

@TypeGraphQL.InputType("PriorityRelationFilter", {
  isAbstract: true
})
export class PriorityRelationFilter {
  @TypeGraphQL.Field(_type => PriorityWhereInput, {
    nullable: true
  })
  is?: PriorityWhereInput | undefined;

  @TypeGraphQL.Field(_type => PriorityWhereInput, {
    nullable: true
  })
  isNot?: PriorityWhereInput | undefined;
}
