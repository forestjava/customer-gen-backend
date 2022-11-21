import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("AlertScalarWhereInput", {
  isAbstract: true
})
export class AlertScalarWhereInput {
  @TypeGraphQL.Field(_type => [AlertScalarWhereInput], {
    nullable: true
  })
  AND?: AlertScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertScalarWhereInput], {
    nullable: true
  })
  OR?: AlertScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertScalarWhereInput], {
    nullable: true
  })
  NOT?: AlertScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  priorityId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  deviceId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  message?: StringNullableFilter | undefined;
}
