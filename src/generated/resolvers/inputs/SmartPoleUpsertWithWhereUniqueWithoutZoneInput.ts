import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleCreateWithoutZoneInput } from "../inputs/SmartPoleCreateWithoutZoneInput";
import { SmartPoleUpdateWithoutZoneInput } from "../inputs/SmartPoleUpdateWithoutZoneInput";
import { SmartPoleWhereUniqueInput } from "../inputs/SmartPoleWhereUniqueInput";

@TypeGraphQL.InputType("SmartPoleUpsertWithWhereUniqueWithoutZoneInput", {
  isAbstract: true
})
export class SmartPoleUpsertWithWhereUniqueWithoutZoneInput {
  @TypeGraphQL.Field(_type => SmartPoleWhereUniqueInput, {
    nullable: false
  })
  where!: SmartPoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => SmartPoleUpdateWithoutZoneInput, {
    nullable: false
  })
  update!: SmartPoleUpdateWithoutZoneInput;

  @TypeGraphQL.Field(_type => SmartPoleCreateWithoutZoneInput, {
    nullable: false
  })
  create!: SmartPoleCreateWithoutZoneInput;
}
