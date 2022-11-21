import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateOrConnectWithoutEventsInput } from "../inputs/DeviceCreateOrConnectWithoutEventsInput";
import { DeviceCreateWithoutEventsInput } from "../inputs/DeviceCreateWithoutEventsInput";
import { DeviceUpdateWithoutEventsInput } from "../inputs/DeviceUpdateWithoutEventsInput";
import { DeviceUpsertWithoutEventsInput } from "../inputs/DeviceUpsertWithoutEventsInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceUpdateOneWithoutEventsNestedInput", {
  isAbstract: true
})
export class DeviceUpdateOneWithoutEventsNestedInput {
  @TypeGraphQL.Field(_type => DeviceCreateWithoutEventsInput, {
    nullable: true
  })
  create?: DeviceCreateWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => DeviceCreateOrConnectWithoutEventsInput, {
    nullable: true
  })
  connectOrCreate?: DeviceCreateOrConnectWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => DeviceUpsertWithoutEventsInput, {
    nullable: true
  })
  upsert?: DeviceUpsertWithoutEventsInput | undefined;

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

  @TypeGraphQL.Field(_type => DeviceUpdateWithoutEventsInput, {
    nullable: true
  })
  update?: DeviceUpdateWithoutEventsInput | undefined;
}
