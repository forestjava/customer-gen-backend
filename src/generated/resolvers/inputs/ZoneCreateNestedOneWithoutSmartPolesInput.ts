import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZoneCreateOrConnectWithoutSmartPolesInput } from "../inputs/ZoneCreateOrConnectWithoutSmartPolesInput";
import { ZoneCreateWithoutSmartPolesInput } from "../inputs/ZoneCreateWithoutSmartPolesInput";
import { ZoneWhereUniqueInput } from "../inputs/ZoneWhereUniqueInput";

@TypeGraphQL.InputType("ZoneCreateNestedOneWithoutSmartPolesInput", {
  isAbstract: true
})
export class ZoneCreateNestedOneWithoutSmartPolesInput {
  @TypeGraphQL.Field(_type => ZoneCreateWithoutSmartPolesInput, {
    nullable: true
  })
  create?: ZoneCreateWithoutSmartPolesInput | undefined;

  @TypeGraphQL.Field(_type => ZoneCreateOrConnectWithoutSmartPolesInput, {
    nullable: true
  })
  connectOrCreate?: ZoneCreateOrConnectWithoutSmartPolesInput | undefined;

  @TypeGraphQL.Field(_type => ZoneWhereUniqueInput, {
    nullable: true
  })
  connect?: ZoneWhereUniqueInput | undefined;
}
