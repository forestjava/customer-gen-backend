import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SolutionWhereUniqueInput } from "../../../inputs/SolutionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSolutionArgs {
  @TypeGraphQL.Field(_type => SolutionWhereUniqueInput, {
    nullable: false
  })
  where!: SolutionWhereUniqueInput;
}
