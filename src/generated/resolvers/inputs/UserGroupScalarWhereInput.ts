import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("UserGroupScalarWhereInput", {
  isAbstract: true
})
export class UserGroupScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserGroupScalarWhereInput], {
    nullable: true
  })
  AND?: UserGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupScalarWhereInput], {
    nullable: true
  })
  OR?: UserGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupScalarWhereInput], {
    nullable: true
  })
  NOT?: UserGroupScalarWhereInput[] | undefined;

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
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  color?: StringNullableFilter | undefined;
}
