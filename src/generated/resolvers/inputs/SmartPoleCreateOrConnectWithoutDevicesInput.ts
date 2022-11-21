import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleCreateWithoutDevicesInput } from "../inputs/SmartPoleCreateWithoutDevicesInput";
import { SmartPoleWhereUniqueInput } from "../inputs/SmartPoleWhereUniqueInput";

@TypeGraphQL.InputType("SmartPoleCreateOrConnectWithoutDevicesInput", {
  isAbstract: true
})
export class SmartPoleCreateOrConnectWithoutDevicesInput {
  @TypeGraphQL.Field(_type => SmartPoleWhereUniqueInput, {
    nullable: false
  })
  where!: SmartPoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => SmartPoleCreateWithoutDevicesInput, {
    nullable: false
  })
  create!: SmartPoleCreateWithoutDevicesInput;
}
