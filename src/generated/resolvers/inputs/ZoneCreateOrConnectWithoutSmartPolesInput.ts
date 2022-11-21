import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZoneCreateWithoutSmartPolesInput } from "../inputs/ZoneCreateWithoutSmartPolesInput";
import { ZoneWhereUniqueInput } from "../inputs/ZoneWhereUniqueInput";

@TypeGraphQL.InputType("ZoneCreateOrConnectWithoutSmartPolesInput", {
  isAbstract: true
})
export class ZoneCreateOrConnectWithoutSmartPolesInput {
  @TypeGraphQL.Field(_type => ZoneWhereUniqueInput, {
    nullable: false
  })
  where!: ZoneWhereUniqueInput;

  @TypeGraphQL.Field(_type => ZoneCreateWithoutSmartPolesInput, {
    nullable: false
  })
  create!: ZoneCreateWithoutSmartPolesInput;
}
