import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriorityCreateManyInput } from "../../../inputs/PriorityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPriorityArgs {
  @TypeGraphQL.Field(_type => [PriorityCreateManyInput], {
    nullable: false
  })
  data!: PriorityCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
