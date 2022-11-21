import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SmartPoleOrderByWithAggregationInput } from "../../../inputs/SmartPoleOrderByWithAggregationInput";
import { SmartPoleScalarWhereWithAggregatesInput } from "../../../inputs/SmartPoleScalarWhereWithAggregatesInput";
import { SmartPoleWhereInput } from "../../../inputs/SmartPoleWhereInput";
import { SmartPoleScalarFieldEnum } from "../../../../enums/SmartPoleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySmartPoleArgs {
  @TypeGraphQL.Field(_type => SmartPoleWhereInput, {
    nullable: true
  })
  where?: SmartPoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SmartPoleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "connectLocationId" | "connectDeviceId" | "name" | "serial" | "latitude" | "longitude" | "zoneId">;

  @TypeGraphQL.Field(_type => SmartPoleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SmartPoleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
