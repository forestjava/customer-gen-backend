import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateOrConnectWithoutEventsInput } from "../inputs/DeviceCreateOrConnectWithoutEventsInput";
import { DeviceCreateWithoutEventsInput } from "../inputs/DeviceCreateWithoutEventsInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceCreateNestedOneWithoutEventsInput", {
  isAbstract: true
})
export class DeviceCreateNestedOneWithoutEventsInput {
  @TypeGraphQL.Field(_type => DeviceCreateWithoutEventsInput, {
    nullable: true
  })
  create?: DeviceCreateWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => DeviceCreateOrConnectWithoutEventsInput, {
    nullable: true
  })
  connectOrCreate?: DeviceCreateOrConnectWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => DeviceWhereUniqueInput, {
    nullable: true
  })
  connect?: DeviceWhereUniqueInput | undefined;
}
