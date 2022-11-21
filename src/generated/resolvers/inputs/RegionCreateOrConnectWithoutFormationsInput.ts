import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateWithoutFormationsInput } from "../inputs/RegionCreateWithoutFormationsInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionCreateOrConnectWithoutFormationsInput", {
  isAbstract: true
})
export class RegionCreateOrConnectWithoutFormationsInput {
  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: false
  })
  where!: RegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionCreateWithoutFormationsInput, {
    nullable: false
  })
  create!: RegionCreateWithoutFormationsInput;
}
