import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateWithoutTypeInput } from "../inputs/DeviceCreateWithoutTypeInput";
import { DeviceUpdateWithoutTypeInput } from "../inputs/DeviceUpdateWithoutTypeInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceUpsertWithWhereUniqueWithoutTypeInput", {
  isAbstract: true
})
export class DeviceUpsertWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => DeviceWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeviceUpdateWithoutTypeInput, {
    nullable: false
  })
  update!: DeviceUpdateWithoutTypeInput;

  @TypeGraphQL.Field(_type => DeviceCreateWithoutTypeInput, {
    nullable: false
  })
  create!: DeviceCreateWithoutTypeInput;
}
