import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateWithoutSmartPoleInput } from "../inputs/DeviceCreateWithoutSmartPoleInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceCreateOrConnectWithoutSmartPoleInput", {
  isAbstract: true
})
export class DeviceCreateOrConnectWithoutSmartPoleInput {
  @TypeGraphQL.Field(_type => DeviceWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeviceCreateWithoutSmartPoleInput, {
    nullable: false
  })
  create!: DeviceCreateWithoutSmartPoleInput;
}
