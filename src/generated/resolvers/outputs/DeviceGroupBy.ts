import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceAvgAggregate } from "../outputs/DeviceAvgAggregate";
import { DeviceCountAggregate } from "../outputs/DeviceCountAggregate";
import { DeviceMaxAggregate } from "../outputs/DeviceMaxAggregate";
import { DeviceMinAggregate } from "../outputs/DeviceMinAggregate";
import { DeviceSumAggregate } from "../outputs/DeviceSumAggregate";

@TypeGraphQL.ObjectType("DeviceGroupBy", {
  isAbstract: true
})
export class DeviceGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serial!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uuid!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  typeId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  connectParamIndex!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  smartPoleId!: number | null;

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
