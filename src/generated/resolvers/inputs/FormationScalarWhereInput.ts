import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FormationScalarWhereInput", {
  isAbstract: true
})
export class FormationScalarWhereInput {
  @TypeGraphQL.Field(_type => [FormationScalarWhereInput], {
    nullable: true
  })
  AND?: FormationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationScalarWhereInput], {
    nullable: true
  })
  OR?: FormationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationScalarWhereInput], {
    nullable: true
  })
  NOT?: FormationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  address?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  regionId?: IntNullableFilter | undefined;
}
