import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateManyTypeInputEnvelope } from "../inputs/DeviceCreateManyTypeInputEnvelope";
import { DeviceCreateOrConnectWithoutTypeInput } from "../inputs/DeviceCreateOrConnectWithoutTypeInput";
import { DeviceCreateWithoutTypeInput } from "../inputs/DeviceCreateWithoutTypeInput";
import { DeviceScalarWhereInput } from "../inputs/DeviceScalarWhereInput";
import { DeviceUpdateManyWithWhereWithoutTypeInput } from "../inputs/DeviceUpdateManyWithWhereWithoutTypeInput";
import { DeviceUpdateWithWhereUniqueWithoutTypeInput } from "../inputs/DeviceUpdateWithWhereUniqueWithoutTypeInput";
import { DeviceUpsertWithWhereUniqueWithoutTypeInput } from "../inputs/DeviceUpsertWithWhereUniqueWithoutTypeInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceUpdateManyWithoutTypeNestedInput", {
  isAbstract: true
})
export class DeviceUpdateManyWithoutTypeNestedInput {
  @TypeGraphQL.Field(_type => [DeviceCreateWithoutTypeInput], {
    nullable: true
  })
  create?: DeviceCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: DeviceCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceUpsertWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  upsert?: DeviceUpsertWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => DeviceCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: DeviceCreateManyTypeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [DeviceUpdateWithWhereUniqueWithoutTypeInput], {
    nullable: true
  })
  update?: DeviceUpdateWithWhereUniqueWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceUpdateManyWithWhereWithoutTypeInput], {
    nullable: true
  })
  updateMany?: DeviceUpdateManyWithWhereWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: DeviceScalarWhereInput[] | undefined;
}
