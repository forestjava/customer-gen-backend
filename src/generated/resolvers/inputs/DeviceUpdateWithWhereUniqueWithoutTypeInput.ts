import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceUpdateWithoutTypeInput } from "../inputs/DeviceUpdateWithoutTypeInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceUpdateWithWhereUniqueWithoutTypeInput", {
  isAbstract: true
})
export class DeviceUpdateWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => DeviceWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeviceUpdateWithoutTypeInput, {
    nullable: false
  })
  data!: DeviceUpdateWithoutTypeInput;
}
