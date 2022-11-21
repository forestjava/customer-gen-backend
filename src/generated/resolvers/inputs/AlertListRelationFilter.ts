import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertWhereInput } from "../inputs/AlertWhereInput";

@TypeGraphQL.InputType("AlertListRelationFilter", {
  isAbstract: true
})
export class AlertListRelationFilter {
  @TypeGraphQL.Field(_type => AlertWhereInput, {
    nullable: true
  })
  every?: AlertWhereInput | undefined;

  @TypeGraphQL.Field(_type => AlertWhereInput, {
    nullable: true
  })
  some?: AlertWhereInput | undefined;

  @TypeGraphQL.Field(_type => AlertWhereInput, {
    nullable: true
  })
  none?: AlertWhereInput | undefined;
}
