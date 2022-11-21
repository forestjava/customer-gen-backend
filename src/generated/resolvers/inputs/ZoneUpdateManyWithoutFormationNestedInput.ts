import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZoneCreateManyFormationInputEnvelope } from "../inputs/ZoneCreateManyFormationInputEnvelope";
import { ZoneCreateOrConnectWithoutFormationInput } from "../inputs/ZoneCreateOrConnectWithoutFormationInput";
import { ZoneCreateWithoutFormationInput } from "../inputs/ZoneCreateWithoutFormationInput";
import { ZoneScalarWhereInput } from "../inputs/ZoneScalarWhereInput";
import { ZoneUpdateManyWithWhereWithoutFormationInput } from "../inputs/ZoneUpdateManyWithWhereWithoutFormationInput";
import { ZoneUpdateWithWhereUniqueWithoutFormationInput } from "../inputs/ZoneUpdateWithWhereUniqueWithoutFormationInput";
import { ZoneUpsertWithWhereUniqueWithoutFormationInput } from "../inputs/ZoneUpsertWithWhereUniqueWithoutFormationInput";
import { ZoneWhereUniqueInput } from "../inputs/ZoneWhereUniqueInput";

@TypeGraphQL.InputType("ZoneUpdateManyWithoutFormationNestedInput", {
  isAbstract: true
})
export class ZoneUpdateManyWithoutFormationNestedInput {
  @TypeGraphQL.Field(_type => [ZoneCreateWithoutFormationInput], {
    nullable: true
  })
  create?: ZoneCreateWithoutFormationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneCreateOrConnectWithoutFormationInput], {
    nullable: true
  })
  connectOrCreate?: ZoneCreateOrConnectWithoutFormationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneUpsertWithWhereUniqueWithoutFormationInput], {
    nullable: true
  })
  upsert?: ZoneUpsertWithWhereUniqueWithoutFormationInput[] | undefined;

  @TypeGraphQL.Field(_type => ZoneCreateManyFormationInputEnvelope, {
    nullable: true
  })
  createMany?: ZoneCreateManyFormationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ZoneWhereUniqueInput], {
    nullable: true
  })
  set?: ZoneWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ZoneWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneWhereUniqueInput], {
    nullable: true
  })
  delete?: ZoneWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneWhereUniqueInput], {
    nullable: true
  })
  connect?: ZoneWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneUpdateWithWhereUniqueWithoutFormationInput], {
    nullable: true
  })
  update?: ZoneUpdateWithWhereUniqueWithoutFormationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneUpdateManyWithWhereWithoutFormationInput], {
    nullable: true
  })
  updateMany?: ZoneUpdateManyWithWhereWithoutFormationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ZoneScalarWhereInput[] | undefined;
}
