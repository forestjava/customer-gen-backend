import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceAvgAggregate } from "../outputs/DeviceAvgAggregate";
import { DeviceCountAggregate } from "../outputs/DeviceCountAggregate";
import { DeviceMaxAggregate } from "../outputs/DeviceMaxAggregate";
import { DeviceMinAggregate } from "../outputs/DeviceMinAggregate";
import { DeviceSumAggregate } from "../outputs/DeviceSumAggregate";

@TypeGraphQL.ObjectType("AggregateDevice", {
  isAbstract: true
})
export class AggregateDevice {
  @TypeGraphQL.Field(_type => DeviceCountAggregate, {
    nullable: true
  })
  _count!: DeviceCountAggregate | null;

  @TypeGraphQL.Field(_type => DeviceAvgAggregate, {
    nullable: true
  })
  _avg!: DeviceAvgAggregate | null;

  @TypeGraphQL.Field(_type => DeviceSumAggregate, {
    nullable: true
  })
  _sum!: DeviceSumAggregate | null;

  @TypeGraphQL.Field(_type => DeviceMinAggregate, {
    nullable: true
  })
  _min!: DeviceMinAggregate | null;

  @TypeGraphQL.Field(_type => DeviceMaxAggregate, {
    nullable: true
  })
  _max!: DeviceMaxAggregate | null;
}
