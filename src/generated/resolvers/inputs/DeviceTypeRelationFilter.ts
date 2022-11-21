import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTypeWhereInput } from "../inputs/DeviceTypeWhereInput";

@TypeGraphQL.InputType("DeviceTypeRelationFilter", {
  isAbstract: true
})
export class DeviceTypeRelationFilter {
  @TypeGraphQL.Field(_type => DeviceTypeWhereInput, {
    nullable: true
  })
  is?: DeviceTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeWhereInput, {
    nullable: true
  })
  isNot?: DeviceTypeWhereInput | undefined;
}
