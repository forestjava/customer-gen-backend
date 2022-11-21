import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateOrConnectWithoutAlertsInput } from "../inputs/DeviceCreateOrConnectWithoutAlertsInput";
import { DeviceCreateWithoutAlertsInput } from "../inputs/DeviceCreateWithoutAlertsInput";
import { DeviceUpdateWithoutAlertsInput } from "../inputs/DeviceUpdateWithoutAlertsInput";
import { DeviceUpsertWithoutAlertsInput } from "../inputs/DeviceUpsertWithoutAlertsInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceUpdateOneWithoutAlertsNestedInput", {
  isAbstract: true
})
export class DeviceUpdateOneWithoutAlertsNestedInput {
  @TypeGraphQL.Field(_type => DeviceCreateWithoutAlertsInput, {
    nullable: true
  })
  create?: DeviceCreateWithoutAlertsInput | undefined;

  @TypeGraphQL.Field(_type => DeviceCreateOrConnectWithoutAlertsInput, {
    nullable: true
  })
  connectOrCreate?: DeviceCreateOrConnectWithoutAlertsInput | undefined;

  @TypeGraphQL.Field(_type => DeviceUpsertWithoutAlertsInput, {
    nullable: true
  })
  upsert?: DeviceUpsertWithoutAlertsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => DeviceWhereUniqueInput, {
    nullable: true
  })
  connect?: DeviceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DeviceUpdateWithoutAlertsInput, {
    nullable: true
  })
  update?: DeviceUpdateWithoutAlertsInput | undefined;
}
