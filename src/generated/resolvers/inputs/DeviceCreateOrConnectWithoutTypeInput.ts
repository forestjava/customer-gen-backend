import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateWithoutTypeInput } from "../inputs/DeviceCreateWithoutTypeInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceCreateOrConnectWithoutTypeInput", {
  isAbstract: true
})
export class DeviceCreateOrConnectWithoutTypeInput {
  @TypeGraphQL.Field(_type => DeviceWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeviceCreateWithoutTypeInput, {
    nullable: false
  })
  create!: DeviceCreateWithoutTypeInput;
}
