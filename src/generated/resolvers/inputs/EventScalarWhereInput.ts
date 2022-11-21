import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("EventScalarWhereInput", {
  isAbstract: true
})
export class EventScalarWhereInput {
  @TypeGraphQL.Field(_type => [EventScalarWhereInput], {
    nullable: true
  })
  AND?: EventScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventScalarWhereInput], {
    nullable: true
  })
  OR?: EventScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventScalarWhereInput], {
    nullable: true
  })
  NOT?: EventScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  priorityId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  moment?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  message?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  deviceId?: IntNullableFilter | undefined;
}
