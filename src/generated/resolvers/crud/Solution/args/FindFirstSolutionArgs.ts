import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SolutionOrderByWithRelationInput } from "../../../inputs/SolutionOrderByWithRelationInput";
import { SolutionWhereInput } from "../../../inputs/SolutionWhereInput";
import { SolutionWhereUniqueInput } from "../../../inputs/SolutionWhereUniqueInput";
import { SolutionScalarFieldEnum } from "../../../../enums/SolutionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSolutionArgs {
  @TypeGraphQL.Field(_type => SolutionWhereInput, {
    nullable: true
  })
  where?: SolutionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SolutionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SolutionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SolutionWhereUniqueInput, {
    nullable: true
  })
  cursor?: SolutionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SolutionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
