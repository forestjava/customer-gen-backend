import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Alert } from "../models/Alert";
import { Event } from "../models/Event";
import { PriorityCount } from "../resolvers/outputs/PriorityCount";

@TypeGraphQL.ObjectType("Priority", {
  isAbstract: true
})
export class Priority {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  alerts?: Alert[];

  events?: Event[];

  @TypeGraphQL.Field(_type => PriorityCount, {
    nullable: true
  })
  _count?: PriorityCount | null;
}
