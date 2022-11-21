import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Device } from "../models/Device";
import { DeviceTypeCount } from "../resolvers/outputs/DeviceTypeCount";

@TypeGraphQL.ObjectType("DeviceType", {
  isAbstract: true
})
export class DeviceType {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  devices?: Device[];

  @TypeGraphQL.Field(_type => DeviceTypeCount, {
    nullable: true
  })
  _count?: DeviceTypeCount | null;
}
