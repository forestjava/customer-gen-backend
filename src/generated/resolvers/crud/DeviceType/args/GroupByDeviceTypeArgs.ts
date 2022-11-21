import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTypeOrderByWithAggregationInput } from "../../../inputs/DeviceTypeOrderByWithAggregationInput";
import { DeviceTypeScalarWhereWithAggregatesInput } from "../../../inputs/DeviceTypeScalarWhereWithAggregatesInput";
import { DeviceTypeWhereInput } from "../../../inputs/DeviceTypeWhereInput";
import { DeviceTypeScalarFieldEnum } from "../../../../enums/DeviceTypeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDeviceTypeArgs {
  @TypeGraphQL.Field(_type => DeviceTypeWhereInput, {
    nullable: true
  })
  where?: DeviceTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeviceTypeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: DeviceTypeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => DeviceTypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DeviceTypeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
