import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceRelationFilter } from "../inputs/DeviceRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PriorityRelationFilter } from "../inputs/PriorityRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("AlertWhereInput", {
  isAbstract: true
})
export class AlertWhereInput {
  @TypeGraphQL.Field(_type => [AlertWhereInput], {
    nullable: true
  })
  AND?: AlertWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertWhereInput], {
    nullable: true
  })
  OR?: AlertWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertWhereInput], {
    nullable: true
  })
  NOT?: AlertWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  priorityId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PriorityRelationFilter, {
    nullable: true
  })
  priority?: PriorityRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  deviceId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DeviceRelationFilter, {
    nullable: true
  })
  device?: DeviceRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  message?: StringNullableFilter | undefined;
}
