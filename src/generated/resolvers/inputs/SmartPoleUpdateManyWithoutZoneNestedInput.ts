import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleCreateManyZoneInputEnvelope } from "../inputs/SmartPoleCreateManyZoneInputEnvelope";
import { SmartPoleCreateOrConnectWithoutZoneInput } from "../inputs/SmartPoleCreateOrConnectWithoutZoneInput";
import { SmartPoleCreateWithoutZoneInput } from "../inputs/SmartPoleCreateWithoutZoneInput";
import { SmartPoleScalarWhereInput } from "../inputs/SmartPoleScalarWhereInput";
import { SmartPoleUpdateManyWithWhereWithoutZoneInput } from "../inputs/SmartPoleUpdateManyWithWhereWithoutZoneInput";
import { SmartPoleUpdateWithWhereUniqueWithoutZoneInput } from "../inputs/SmartPoleUpdateWithWhereUniqueWithoutZoneInput";
import { SmartPoleUpsertWithWhereUniqueWithoutZoneInput } from "../inputs/SmartPoleUpsertWithWhereUniqueWithoutZoneInput";
import { SmartPoleWhereUniqueInput } from "../inputs/SmartPoleWhereUniqueInput";

@TypeGraphQL.InputType("SmartPoleUpdateManyWithoutZoneNestedInput", {
  isAbstract: true
})
export class SmartPoleUpdateManyWithoutZoneNestedInput {
  @TypeGraphQL.Field(_type => [SmartPoleCreateWithoutZoneInput], {
    nullable: true
  })
  create?: SmartPoleCreateWithoutZoneInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleCreateOrConnectWithoutZoneInput], {
    nullable: true
  })
  connectOrCreate?: SmartPoleCreateOrConnectWithoutZoneInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleUpsertWithWhereUniqueWithoutZoneInput], {
    nullable: true
  })
  upsert?: SmartPoleUpsertWithWhereUniqueWithoutZoneInput[] | undefined;

  @TypeGraphQL.Field(_type => SmartPoleCreateManyZoneInputEnvelope, {
    nullable: true
  })
  createMany?: SmartPoleCreateManyZoneInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleWhereUniqueInput], {
    nullable: true
  })
  set?: SmartPoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SmartPoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleWhereUniqueInput], {
    nullable: true
  })
  delete?: SmartPoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleWhereUniqueInput], {
    nullable: true
  })
  connect?: SmartPoleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleUpdateWithWhereUniqueWithoutZoneInput], {
    nullable: true
  })
  update?: SmartPoleUpdateWithWhereUniqueWithoutZoneInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleUpdateManyWithWhereWithoutZoneInput], {
    nullable: true
  })
  updateMany?: SmartPoleUpdateManyWithWhereWithoutZoneInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SmartPoleScalarWhereInput[] | undefined;
}
