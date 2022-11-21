import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceWhereInput } from "../inputs/DeviceWhereInput";

@TypeGraphQL.InputType("DeviceListRelationFilter", {
  isAbstract: true
})
export class DeviceListRelationFilter {
  @TypeGraphQL.Field(_type => DeviceWhereInput, {
    nullable: true
  })
  every?: DeviceWhereInput | undefined;

  @TypeGraphQL.Field(_type => DeviceWhereInput, {
    nullable: true
  })
  some?: DeviceWhereInput | undefined;

  @TypeGraphQL.Field(_type => DeviceWhereInput, {
    nullable: true
  })
  none?: DeviceWhereInput | undefined;
}
