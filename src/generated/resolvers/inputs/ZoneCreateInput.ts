import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateNestedOneWithoutZonesInput } from "../inputs/FormationCreateNestedOneWithoutZonesInput";
import { SmartPoleCreateNestedManyWithoutZoneInput } from "../inputs/SmartPoleCreateNestedManyWithoutZoneInput";

@TypeGraphQL.InputType("ZoneCreateInput", {
  isAbstract: true
})
export class ZoneCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => FormationCreateNestedOneWithoutZonesInput, {
    nullable: true
  })
  formation?: FormationCreateNestedOneWithoutZonesInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleCreateNestedManyWithoutZoneInput, {
    nullable: true
  })
  smartPoles?: SmartPoleCreateNestedManyWithoutZoneInput | undefined;
}
