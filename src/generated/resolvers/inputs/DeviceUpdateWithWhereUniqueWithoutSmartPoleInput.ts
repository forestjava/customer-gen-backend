import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceUpdateWithoutSmartPoleInput } from "../inputs/DeviceUpdateWithoutSmartPoleInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceUpdateWithWhereUniqueWithoutSmartPoleInput", {
  isAbstract: true
})
export class DeviceUpdateWithWhereUniqueWithoutSmartPoleInput {
  @TypeGraphQL.Field(_type => DeviceWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeviceUpdateWithoutSmartPoleInput, {
    nullable: false
  })
  data!: DeviceUpdateWithoutSmartPoleInput;
}
