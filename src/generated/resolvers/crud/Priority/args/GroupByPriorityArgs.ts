import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriorityOrderByWithAggregationInput } from "../../../inputs/PriorityOrderByWithAggregationInput";
import { PriorityScalarWhereWithAggregatesInput } from "../../../inputs/PriorityScalarWhereWithAggregatesInput";
import { PriorityWhereInput } from "../../../inputs/PriorityWhereInput";
import { PriorityScalarFieldEnum } from "../../../../enums/PriorityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPriorityArgs {
  @TypeGraphQL.Field(_type => PriorityWhereInput, {
    nullable: true
  })
  where?: PriorityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PriorityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PriorityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PriorityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => PriorityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PriorityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
