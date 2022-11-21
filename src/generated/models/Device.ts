import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Alert } from "../models/Alert";
import { DeviceType } from "../models/DeviceType";
import { Event } from "../models/Event";
import { SmartPole } from "../models/SmartPole";
import { DeviceCount } from "../resolvers/outputs/DeviceCount";

@TypeGraphQL.ObjectType("Device", {
  isAbstract: true
})
export class Device {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serial?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uuid?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  typeId?: number | null;

  type?: DeviceType | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  connectParamIndex?: string | null;

  alerts?: Alert[];

  events?: Event[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  smartPoleId?: number | null;

  smartPole?: SmartPole | null;

  @TypeGraphQL.Field(_type => DeviceCount, {
    nullable: true
  })
  _count?: DeviceCount | null;
}
