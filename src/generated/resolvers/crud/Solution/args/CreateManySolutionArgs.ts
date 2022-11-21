import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SolutionCreateManyInput } from "../../../inputs/SolutionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySolutionArgs {
  @TypeGraphQL.Field(_type => [SolutionCreateManyInput], {
    nullable: false
  })
  data!: SolutionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
