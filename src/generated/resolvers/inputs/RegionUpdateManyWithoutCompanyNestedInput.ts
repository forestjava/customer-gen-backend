import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateManyCompanyInputEnvelope } from "../inputs/RegionCreateManyCompanyInputEnvelope";
import { RegionCreateOrConnectWithoutCompanyInput } from "../inputs/RegionCreateOrConnectWithoutCompanyInput";
import { RegionCreateWithoutCompanyInput } from "../inputs/RegionCreateWithoutCompanyInput";
import { RegionScalarWhereInput } from "../inputs/RegionScalarWhereInput";
import { RegionUpdateManyWithWhereWithoutCompanyInput } from "../inputs/RegionUpdateManyWithWhereWithoutCompanyInput";
import { RegionUpdateWithWhereUniqueWithoutCompanyInput } from "../inputs/RegionUpdateWithWhereUniqueWithoutCompanyInput";
import { RegionUpsertWithWhereUniqueWithoutCompanyInput } from "../inputs/RegionUpsertWithWhereUniqueWithoutCompanyInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionUpdateManyWithoutCompanyNestedInput", {
  isAbstract: true
})
export class RegionUpdateManyWithoutCompanyNestedInput {
  @TypeGraphQL.Field(_type => [RegionCreateWithoutCompanyInput], {
    nullable: true
  })
  create?: RegionCreateWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionCreateOrConnectWithoutCompanyInput], {
    nullable: true
  })
  connectOrCreate?: RegionCreateOrConnectWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionUpsertWithWhereUniqueWithoutCompanyInput], {
    nullable: true
  })
  upsert?: RegionUpsertWithWhereUniqueWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => RegionCreateManyCompanyInputEnvelope, {
    nullable: true
  })
  createMany?: RegionCreateManyCompanyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RegionWhereUniqueInput], {
    nullable: true
  })
  set?: RegionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RegionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionWhereUniqueInput], {
    nullable: true
  })
  delete?: RegionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionWhereUniqueInput], {
    nullable: true
  })
  connect?: RegionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionUpdateWithWhereUniqueWithoutCompanyInput], {
    nullable: true
  })
  update?: RegionUpdateWithWhereUniqueWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionUpdateManyWithWhereWithoutCompanyInput], {
    nullable: true
  })
  updateMany?: RegionUpdateManyWithWhereWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RegionScalarWhereInput[] | undefined;
}
