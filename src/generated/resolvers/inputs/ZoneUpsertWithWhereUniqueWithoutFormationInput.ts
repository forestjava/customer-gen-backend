import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZoneCreateWithoutFormationInput } from "../inputs/ZoneCreateWithoutFormationInput";
import { ZoneUpdateWithoutFormationInput } from "../inputs/ZoneUpdateWithoutFormationInput";
import { ZoneWhereUniqueInput } from "../inputs/ZoneWhereUniqueInput";

@TypeGraphQL.InputType("ZoneUpsertWithWhereUniqueWithoutFormationInput", {
  isAbstract: true
})
export class ZoneUpsertWithWhereUniqueWithoutFormationInput {
  @TypeGraphQL.Field(_type => ZoneWhereUniqueInput, {
    nullable: false
  })
  where!: ZoneWhereUniqueInput;

  @TypeGraphQL.Field(_type => ZoneUpdateWithoutFormationInput, {
    nullable: false
  })
  update!: ZoneUpdateWithoutFormationInput;

  @TypeGraphQL.Field(_type => ZoneCreateWithoutFormationInput, {
    nullable: false
  })
  create!: ZoneCreateWithoutFormationInput;
}
