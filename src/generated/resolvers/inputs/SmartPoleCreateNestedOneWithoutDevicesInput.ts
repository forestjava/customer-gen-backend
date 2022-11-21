import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleCreateOrConnectWithoutDevicesInput } from "../inputs/SmartPoleCreateOrConnectWithoutDevicesInput";
import { SmartPoleCreateWithoutDevicesInput } from "../inputs/SmartPoleCreateWithoutDevicesInput";
import { SmartPoleWhereUniqueInput } from "../inputs/SmartPoleWhereUniqueInput";

@TypeGraphQL.InputType("SmartPoleCreateNestedOneWithoutDevicesInput", {
  isAbstract: true
})
export class SmartPoleCreateNestedOneWithoutDevicesInput {
  @TypeGraphQL.Field(_type => SmartPoleCreateWithoutDevicesInput, {
    nullable: true
  })
  create?: SmartPoleCreateWithoutDevicesInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleCreateOrConnectWithoutDevicesInput, {
    nullable: true
  })
  connectOrCreate?: SmartPoleCreateOrConnectWithoutDevicesInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleWhereUniqueInput, {
    nullable: true
  })
  connect?: SmartPoleWhereUniqueInput | undefined;
}
