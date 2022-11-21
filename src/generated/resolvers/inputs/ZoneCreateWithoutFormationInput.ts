import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleCreateNestedManyWithoutZoneInput } from "../inputs/SmartPoleCreateNestedManyWithoutZoneInput";

@TypeGraphQL.InputType("ZoneCreateWithoutFormationInput", {
  isAbstract: true
})
export class ZoneCreateWithoutFormationInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => SmartPoleCreateNestedManyWithoutZoneInput, {
    nullable: true
  })
  smartPoles?: SmartPoleCreateNestedManyWithoutZoneInput | undefined;
}
