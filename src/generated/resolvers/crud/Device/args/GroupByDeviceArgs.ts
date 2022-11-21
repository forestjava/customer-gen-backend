import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceOrderByWithAggregationInput } from "../../../inputs/DeviceOrderByWithAggregationInput";
import { DeviceScalarWhereWithAggregatesInput } from "../../../inputs/DeviceScalarWhereWithAggregatesInput";
import { DeviceWhereInput } from "../../../inputs/DeviceWhereInput";
import { DeviceScalarFieldEnum } from "../../../../enums/DeviceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDeviceArgs {
  @TypeGraphQL.Field(_type => DeviceWhereInput, {
    nullable: true
  })
  where?: DeviceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeviceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DeviceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "serial" | "uuid" | "typeId" | "connectParamIndex" | "smartPoleId">;

  @TypeGraphQL.Field(_type => DeviceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DeviceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
