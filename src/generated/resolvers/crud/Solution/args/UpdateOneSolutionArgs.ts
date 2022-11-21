import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SolutionUpdateInput } from "../../../inputs/SolutionUpdateInput";
import { SolutionWhereUniqueInput } from "../../../inputs/SolutionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSolutionArgs {
  @TypeGraphQL.Field(_type => SolutionUpdateInput, {
    nullable: false
  })
  data!: SolutionUpdateInput;

  @TypeGraphQL.Field(_type => SolutionWhereUniqueInput, {
    nullable: false
  })
  where!: SolutionWhereUniqueInput;
}
