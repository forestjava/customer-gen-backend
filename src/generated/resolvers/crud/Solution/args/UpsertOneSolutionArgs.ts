import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SolutionCreateInput } from "../../../inputs/SolutionCreateInput";
import { SolutionUpdateInput } from "../../../inputs/SolutionUpdateInput";
import { SolutionWhereUniqueInput } from "../../../inputs/SolutionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSolutionArgs {
  @TypeGraphQL.Field(_type => SolutionWhereUniqueInput, {
    nullable: false
  })
  where!: SolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SolutionCreateInput, {
    nullable: false
  })
  create!: SolutionCreateInput;

  @TypeGraphQL.Field(_type => SolutionUpdateInput, {
    nullable: false
  })
  update!: SolutionUpdateInput;
}
