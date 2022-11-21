import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZoneCreateWithoutSmartPolesInput } from "../inputs/ZoneCreateWithoutSmartPolesInput";
import { ZoneUpdateWithoutSmartPolesInput } from "../inputs/ZoneUpdateWithoutSmartPolesInput";

@TypeGraphQL.InputType("ZoneUpsertWithoutSmartPolesInput", {
  isAbstract: true
})
export class ZoneUpsertWithoutSmartPolesInput {
  @TypeGraphQL.Field(_type => ZoneUpdateWithoutSmartPolesInput, {
    nullable: false
  })
  update!: ZoneUpdateWithoutSmartPolesInput;

  @TypeGraphQL.Field(_type => ZoneCreateWithoutSmartPolesInput, {
    nullable: false
  })
  create!: ZoneCreateWithoutSmartPolesInput;
}
