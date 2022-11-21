import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SmartPoleCreateManyZoneInputEnvelope } from "../inputs/SmartPoleCreateManyZoneInputEnvelope";
import { SmartPoleCreateOrConnectWithoutZoneInput } from "../inputs/SmartPoleCreateOrConnectWithoutZoneInput";
import { SmartPoleCreateWithoutZoneInput } from "../inputs/SmartPoleCreateWithoutZoneInput";
import { SmartPoleWhereUniqueInput } from "../inputs/SmartPoleWhereUniqueInput";

@TypeGraphQL.InputType("SmartPoleCreateNestedManyWithoutZoneInput", {
  isAbstract: true
})
export class SmartPoleCreateNestedManyWithoutZoneInput {
  @TypeGraphQL.Field(_type => [SmartPoleCreateWithoutZoneInput], {
    nullable: true
  })
  create?: SmartPoleCreateWithoutZoneInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleCreateOrConnectWithoutZoneInput], {
    nullable: true
  })
  connectOrCreate?: SmartPoleCreateOrConnectWithoutZoneInput[] | undefined;

  @TypeGraphQL.Field(_type => SmartPoleCreateManyZoneInputEnvelope, {
    nullable: true
  })
  createMany?: SmartPoleCreateManyZoneInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleWhereUniqueInput], {
    nullable: true
  })
  connect?: SmartPoleWhereUniqueInput[] | undefined;
}
