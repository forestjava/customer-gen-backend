import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZoneCreateManyFormationInputEnvelope } from "../inputs/ZoneCreateManyFormationInputEnvelope";
import { ZoneCreateOrConnectWithoutFormationInput } from "../inputs/ZoneCreateOrConnectWithoutFormationInput";
import { ZoneCreateWithoutFormationInput } from "../inputs/ZoneCreateWithoutFormationInput";
import { ZoneWhereUniqueInput } from "../inputs/ZoneWhereUniqueInput";

@TypeGraphQL.InputType("ZoneCreateNestedManyWithoutFormationInput", {
  isAbstract: true
})
export class ZoneCreateNestedManyWithoutFormationInput {
  @TypeGraphQL.Field(_type => [ZoneCreateWithoutFormationInput], {
    nullable: true
  })
  create?: ZoneCreateWithoutFormationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneCreateOrConnectWithoutFormationInput], {
    nullable: true
  })
  connectOrCreate?: ZoneCreateOrConnectWithoutFormationInput[] | undefined;

  @TypeGraphQL.Field(_type => ZoneCreateManyFormationInputEnvelope, {
    nullable: true
  })
  createMany?: ZoneCreateManyFormationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ZoneWhereUniqueInput], {
    nullable: true
  })
  connect?: ZoneWhereUniqueInput[] | undefined;
}
