import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZoneCreateWithoutFormationInput } from "../inputs/ZoneCreateWithoutFormationInput";
import { ZoneWhereUniqueInput } from "../inputs/ZoneWhereUniqueInput";

@TypeGraphQL.InputType("ZoneCreateOrConnectWithoutFormationInput", {
  isAbstract: true
})
export class ZoneCreateOrConnectWithoutFormationInput {
  @TypeGraphQL.Field(_type => ZoneWhereUniqueInput, {
    nullable: false
  })
  where!: ZoneWhereUniqueInput;

  @TypeGraphQL.Field(_type => ZoneCreateWithoutFormationInput, {
    nullable: false
  })
  create!: ZoneCreateWithoutFormationInput;
}
