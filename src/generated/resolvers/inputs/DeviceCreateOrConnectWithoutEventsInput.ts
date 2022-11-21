import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateWithoutEventsInput } from "../inputs/DeviceCreateWithoutEventsInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceCreateOrConnectWithoutEventsInput", {
  isAbstract: true
})
export class DeviceCreateOrConnectWithoutEventsInput {
  @TypeGraphQL.Field(_type => DeviceWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeviceCreateWithoutEventsInput, {
    nullable: false
  })
  create!: DeviceCreateWithoutEventsInput;
}
