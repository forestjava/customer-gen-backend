import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateWithoutSmartPoleInput } from "../inputs/DeviceCreateWithoutSmartPoleInput";
import { DeviceUpdateWithoutSmartPoleInput } from "../inputs/DeviceUpdateWithoutSmartPoleInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceUpsertWithWhereUniqueWithoutSmartPoleInput", {
  isAbstract: true
})
export class DeviceUpsertWithWhereUniqueWithoutSmartPoleInput {
  @TypeGraphQL.Field(_type => DeviceWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeviceUpdateWithoutSmartPoleInput, {
    nullable: false
  })
  update!: DeviceUpdateWithoutSmartPoleInput;

  @TypeGraphQL.Field(_type => DeviceCreateWithoutSmartPoleInput, {
    nullable: false
  })
  create!: DeviceCreateWithoutSmartPoleInput;
}
