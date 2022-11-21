import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleCreateWithoutZoneInput } from "../inputs/SmartPoleCreateWithoutZoneInput";
import { SmartPoleWhereUniqueInput } from "../inputs/SmartPoleWhereUniqueInput";

@TypeGraphQL.InputType("SmartPoleCreateOrConnectWithoutZoneInput", {
  isAbstract: true
})
export class SmartPoleCreateOrConnectWithoutZoneInput {
  @TypeGraphQL.Field(_type => SmartPoleWhereUniqueInput, {
    nullable: false
  })
  where!: SmartPoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => SmartPoleCreateWithoutZoneInput, {
    nullable: false
  })
  create!: SmartPoleCreateWithoutZoneInput;
}
