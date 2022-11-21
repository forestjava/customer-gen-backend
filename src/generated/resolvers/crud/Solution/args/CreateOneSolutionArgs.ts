import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SolutionCreateInput } from "../../../inputs/SolutionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSolutionArgs {
  @TypeGraphQL.Field(_type => SolutionCreateInput, {
    nullable: false
  })
  data!: SolutionCreateInput;
}
