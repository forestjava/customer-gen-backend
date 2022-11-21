import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SolutionUpdateManyMutationInput } from "../../../inputs/SolutionUpdateManyMutationInput";
import { SolutionWhereInput } from "../../../inputs/SolutionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySolutionArgs {
  @TypeGraphQL.Field(_type => SolutionUpdateManyMutationInput, {
    nullable: false
  })
  data!: SolutionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SolutionWhereInput, {
    nullable: true
  })
  where?: SolutionWhereInput | undefined;
}
