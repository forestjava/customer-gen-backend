import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceWhereInput } from "../inputs/DeviceWhereInput";

@TypeGraphQL.InputType("DeviceRelationFilter", {
  isAbstract: true
})
export class DeviceRelationFilter {
  @TypeGraphQL.Field(_type => DeviceWhereInput, {
    nullable: true
  })
  is?: DeviceWhereInput | undefined;

  @TypeGraphQL.Field(_type => DeviceWhereInput, {
    nullable: true
  })
  isNot?: DeviceWhereInput | undefined;
}
