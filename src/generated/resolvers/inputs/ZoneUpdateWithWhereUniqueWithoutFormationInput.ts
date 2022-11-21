import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZoneUpdateWithoutFormationInput } from "../inputs/ZoneUpdateWithoutFormationInput";
import { ZoneWhereUniqueInput } from "../inputs/ZoneWhereUniqueInput";

@TypeGraphQL.InputType("ZoneUpdateWithWhereUniqueWithoutFormationInput", {
  isAbstract: true
})
export class ZoneUpdateWithWhereUniqueWithoutFormationInput {
  @TypeGraphQL.Field(_type => ZoneWhereUniqueInput, {
    nullable: false
  })
  where!: ZoneWhereUniqueInput;

  @TypeGraphQL.Field(_type => ZoneUpdateWithoutFormationInput, {
    nullable: false
  })
  data!: ZoneUpdateWithoutFormationInput;
}
