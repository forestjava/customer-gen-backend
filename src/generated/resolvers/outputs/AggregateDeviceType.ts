import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceTypeAvgAggregate } from "../outputs/DeviceTypeAvgAggregate";
import { DeviceTypeCountAggregate } from "../outputs/DeviceTypeCountAggregate";
import { DeviceTypeMaxAggregate } from "../outputs/DeviceTypeMaxAggregate";
import { DeviceTypeMinAggregate } from "../outputs/DeviceTypeMinAggregate";
import { DeviceTypeSumAggregate } from "../outputs/DeviceTypeSumAggregate";

@TypeGraphQL.ObjectType("AggregateDeviceType", {
  isAbstract: true
})
export class AggregateDeviceType {
  @TypeGraphQL.Field(_type => DeviceTypeCountAggregate, {
    nullable: true
  })
  _count!: DeviceTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => DeviceTypeAvgAggregate, {
    nullable: true
  })
  _avg!: DeviceTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => DeviceTypeSumAggregate, {
    nullable: true
  })
  _sum!: DeviceTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => DeviceTypeMinAggregate, {
    nullable: true
  })
  _min!: DeviceTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => DeviceTypeMaxAggregate, {
    nullable: true
  })
  _max!: DeviceTypeMaxAggregate | null;
}
