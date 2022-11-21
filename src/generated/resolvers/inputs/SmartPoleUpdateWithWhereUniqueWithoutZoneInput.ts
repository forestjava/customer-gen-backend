import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleUpdateWithoutZoneInput } from "../inputs/SmartPoleUpdateWithoutZoneInput";
import { SmartPoleWhereUniqueInput } from "../inputs/SmartPoleWhereUniqueInput";

@TypeGraphQL.InputType("SmartPoleUpdateWithWhereUniqueWithoutZoneInput", {
  isAbstract: true
})
export class SmartPoleUpdateWithWhereUniqueWithoutZoneInput {
  @TypeGraphQL.Field(_type => SmartPoleWhereUniqueInput, {
    nullable: false
  })
  where!: SmartPoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => SmartPoleUpdateWithoutZoneInput, {
    nullable: false
  })
  data!: SmartPoleUpdateWithoutZoneInput;
}
