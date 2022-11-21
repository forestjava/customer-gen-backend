import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateOrConnectWithoutFormationsInput } from "../inputs/RegionCreateOrConnectWithoutFormationsInput";
import { RegionCreateWithoutFormationsInput } from "../inputs/RegionCreateWithoutFormationsInput";
import { RegionUpdateWithoutFormationsInput } from "../inputs/RegionUpdateWithoutFormationsInput";
import { RegionUpsertWithoutFormationsInput } from "../inputs/RegionUpsertWithoutFormationsInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionUpdateOneWithoutFormationsNestedInput", {
  isAbstract: true
})
export class RegionUpdateOneWithoutFormationsNestedInput {
  @TypeGraphQL.Field(_type => RegionCreateWithoutFormationsInput, {
    nullable: true
  })
  create?: RegionCreateWithoutFormationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionCreateOrConnectWithoutFormationsInput, {
    nullable: true
  })
  connectOrCreate?: RegionCreateOrConnectWithoutFormationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpsertWithoutFormationsInput, {
    nullable: true
  })
  upsert?: RegionUpsertWithoutFormationsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RegionUpdateWithoutFormationsInput, {
    nullable: true
  })
  update?: RegionUpdateWithoutFormationsInput | undefined;
}
