import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateWithoutFormationsInput } from "../inputs/RegionCreateWithoutFormationsInput";
import { RegionUpdateWithoutFormationsInput } from "../inputs/RegionUpdateWithoutFormationsInput";

@TypeGraphQL.InputType("RegionUpsertWithoutFormationsInput", {
  isAbstract: true
})
export class RegionUpsertWithoutFormationsInput {
  @TypeGraphQL.Field(_type => RegionUpdateWithoutFormationsInput, {
    nullable: false
  })
  update!: RegionUpdateWithoutFormationsInput;

  @TypeGraphQL.Field(_type => RegionCreateWithoutFormationsInput, {
    nullable: false
  })
  create!: RegionCreateWithoutFormationsInput;
}
