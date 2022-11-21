import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Device } from "../models/Device";
import { Priority } from "../models/Priority";

@TypeGraphQL.ObjectType("Alert", {
  isAbstract: true
})
export class Alert {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priorityId?: number | null;

  priority?: Priority | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  deviceId?: number | null;

  device?: Device | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | null;
}
