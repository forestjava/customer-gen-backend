import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SolutionWhereInput } from "../../../inputs/SolutionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySolutionArgs {
  @TypeGraphQL.Field(_type => SolutionWhereInput, {
    nullable: true
  })
  where?: SolutionWhereInput | undefined;
}
