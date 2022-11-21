import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleCreateManyZoneInput } from "../inputs/SmartPoleCreateManyZoneInput";

@TypeGraphQL.InputType("SmartPoleCreateManyZoneInputEnvelope", {
  isAbstract: true
})
export class SmartPoleCreateManyZoneInputEnvelope {
  @TypeGraphQL.Field(_type => [SmartPoleCreateManyZoneInput], {
    nullable: false
  })
  data!: SmartPoleCreateManyZoneInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
