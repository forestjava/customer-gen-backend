import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Device } from "../models/Device";
import { Zone } from "../models/Zone";
import { SmartPoleCount } from "../resolvers/outputs/SmartPoleCount";

@TypeGraphQL.ObjectType("SmartPole", {
  isAbstract: true
})
export class SmartPole {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  connectLocationId?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  connectDeviceId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serial?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  latitude?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  longitude?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  zoneId?: number | null;

  zone?: Zone | null;

  devices?: Device[];

  @TypeGraphQL.Field(_type => SmartPoleCount, {
    nullable: true
  })
  _count?: SmartPoleCount | null;
}
