import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleCreateOrConnectWithoutDevicesInput } from "../inputs/SmartPoleCreateOrConnectWithoutDevicesInput";
import { SmartPoleCreateWithoutDevicesInput } from "../inputs/SmartPoleCreateWithoutDevicesInput";
import { SmartPoleUpdateWithoutDevicesInput } from "../inputs/SmartPoleUpdateWithoutDevicesInput";
import { SmartPoleUpsertWithoutDevicesInput } from "../inputs/SmartPoleUpsertWithoutDevicesInput";
import { SmartPoleWhereUniqueInput } from "../inputs/SmartPoleWhereUniqueInput";

@TypeGraphQL.InputType("SmartPoleUpdateOneWithoutDevicesNestedInput", {
  isAbstract: true
})
export class SmartPoleUpdateOneWithoutDevicesNestedInput {
  @TypeGraphQL.Field(_type => SmartPoleCreateWithoutDevicesInput, {
    nullable: true
  })
  create?: SmartPoleCreateWithoutDevicesInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleCreateOrConnectWithoutDevicesInput, {
    nullable: true
  })
  connectOrCreate?: SmartPoleCreateOrConnectWithoutDevicesInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleUpsertWithoutDevicesInput, {
    nullable: true
  })
  upsert?: SmartPoleUpsertWithoutDevicesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SmartPoleWhereUniqueInput, {
    nullable: true
  })
  connect?: SmartPoleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SmartPoleUpdateWithoutDevicesInput, {
    nullable: true
  })
  update?: SmartPoleUpdateWithoutDevicesInput | undefined;
}
