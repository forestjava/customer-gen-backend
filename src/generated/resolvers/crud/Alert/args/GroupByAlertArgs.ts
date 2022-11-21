import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlertOrderByWithAggregationInput } from "../../../inputs/AlertOrderByWithAggregationInput";
import { AlertScalarWhereWithAggregatesInput } from "../../../inputs/AlertScalarWhereWithAggregatesInput";
import { AlertWhereInput } from "../../../inputs/AlertWhereInput";
import { AlertScalarFieldEnum } from "../../../../enums/AlertScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAlertArgs {
  @TypeGraphQL.Field(_type => AlertWhereInput, {
    nullable: true
  })
  where?: AlertWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AlertOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AlertOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlertScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "priorityId" | "deviceId" | "message">;

  @TypeGraphQL.Field(_type => AlertScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AlertScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
