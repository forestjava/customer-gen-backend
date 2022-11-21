import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SolutionWhereUniqueInput } from "../../../inputs/SolutionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSolutionArgs {
  @TypeGraphQL.Field(_type => SolutionWhereUniqueInput, {
    nullable: false
  })
  where!: SolutionWhereUniqueInput;
}
