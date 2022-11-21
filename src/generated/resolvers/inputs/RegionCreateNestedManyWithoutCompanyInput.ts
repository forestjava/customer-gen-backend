import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateManyCompanyInputEnvelope } from "../inputs/RegionCreateManyCompanyInputEnvelope";
import { RegionCreateOrConnectWithoutCompanyInput } from "../inputs/RegionCreateOrConnectWithoutCompanyInput";
import { RegionCreateWithoutCompanyInput } from "../inputs/RegionCreateWithoutCompanyInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionCreateNestedManyWithoutCompanyInput", {
  isAbstract: true
})
export class RegionCreateNestedManyWithoutCompanyInput {
  @TypeGraphQL.Field(_type => [RegionCreateWithoutCompanyInput], {
    nullable: true
  })
  create?: RegionCreateWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionCreateOrConnectWithoutCompanyInput], {
    nullable: true
  })
  connectOrCreate?: RegionCreateOrConnectWithoutCompanyInput[] | undefined;

  @TypeGraphQL.Field(_type => RegionCreateManyCompanyInputEnvelope, {
    nullable: true
  })
  createMany?: RegionCreateManyCompanyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RegionWhereUniqueInput], {
    nullable: true
  })
  connect?: RegionWhereUniqueInput[] | undefined;
}
