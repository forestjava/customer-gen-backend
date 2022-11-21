import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateOrConnectWithoutFormationsInput } from "../inputs/RegionCreateOrConnectWithoutFormationsInput";
import { RegionCreateWithoutFormationsInput } from "../inputs/RegionCreateWithoutFormationsInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionCreateNestedOneWithoutFormationsInput", {
  isAbstract: true
})
export class RegionCreateNestedOneWithoutFormationsInput {
  @TypeGraphQL.Field(_type => RegionCreateWithoutFormationsInput, {
    nullable: true
  })
  create?: RegionCreateWithoutFormationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionCreateOrConnectWithoutFormationsInput, {
    nullable: true
  })
  connectOrCreate?: RegionCreateOrConnectWithoutFormationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionWhereUniqueInput | undefined;
}
