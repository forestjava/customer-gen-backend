import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateManySmartPoleInputEnvelope } from "../inputs/DeviceCreateManySmartPoleInputEnvelope";
import { DeviceCreateOrConnectWithoutSmartPoleInput } from "../inputs/DeviceCreateOrConnectWithoutSmartPoleInput";
import { DeviceCreateWithoutSmartPoleInput } from "../inputs/DeviceCreateWithoutSmartPoleInput";
import { DeviceScalarWhereInput } from "../inputs/DeviceScalarWhereInput";
import { DeviceUpdateManyWithWhereWithoutSmartPoleInput } from "../inputs/DeviceUpdateManyWithWhereWithoutSmartPoleInput";
import { DeviceUpdateWithWhereUniqueWithoutSmartPoleInput } from "../inputs/DeviceUpdateWithWhereUniqueWithoutSmartPoleInput";
import { DeviceUpsertWithWhereUniqueWithoutSmartPoleInput } from "../inputs/DeviceUpsertWithWhereUniqueWithoutSmartPoleInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceUpdateManyWithoutSmartPoleNestedInput", {
  isAbstract: true
})
export class DeviceUpdateManyWithoutSmartPoleNestedInput {
  @TypeGraphQL.Field(_type => [DeviceCreateWithoutSmartPoleInput], {
    nullable: true
  })
  create?: DeviceCreateWithoutSmartPoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceCreateOrConnectWithoutSmartPoleInput], {
    nullable: true
  })
  connectOrCreate?: DeviceCreateOrConnectWithoutSmartPoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceUpsertWithWhereUniqueWithoutSmartPoleInput], {
    nullable: true
  })
  upsert?: DeviceUpsertWithWhereUniqueWithoutSmartPoleInput[] | undefined;

  @TypeGraphQL.Field(_type => DeviceCreateManySmartPoleInputEnvelope, {
    nullable: true
  })
  createMany?: DeviceCreateManySmartPoleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DeviceWhereUniqueInput], {
    nullable: true
  })
  set?: DeviceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: DeviceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceWhereUniqueInput], {
    nullable: true
  })
  delete?: DeviceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceWhereUniqueInput], {
    nullable: true
  })
  connect?: DeviceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceUpdateWithWhereUniqueWithoutSmartPoleInput], {
    nullable: true
  })
  update?: DeviceUpdateWithWhereUniqueWithoutSmartPoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceUpdateManyWithWhereWithoutSmartPoleInput], {
    nullable: true
  })
  updateMany?: DeviceUpdateManyWithWhereWithoutSmartPoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DeviceScalarWhereInput[] | undefined;
}
