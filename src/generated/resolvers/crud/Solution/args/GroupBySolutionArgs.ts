import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SolutionOrderByWithAggregationInput } from "../../../inputs/SolutionOrderByWithAggregationInput";
import { SolutionScalarWhereWithAggregatesInput } from "../../../inputs/SolutionScalarWhereWithAggregatesInput";
import { SolutionWhereInput } from "../../../inputs/SolutionWhereInput";
import { SolutionScalarFieldEnum } from "../../../../enums/SolutionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySolutionArgs {
  @TypeGraphQL.Field(_type => SolutionWhereInput, {
    nullable: true
  })
  where?: SolutionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SolutionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SolutionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name">;

  @TypeGraphQL.Field(_type => SolutionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SolutionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
