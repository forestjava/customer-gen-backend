import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriorityCreateInput } from "../../../inputs/PriorityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePriorityArgs {
  @TypeGraphQL.Field(_type => PriorityCreateInput, {
    nullable: false
  })
  data!: PriorityCreateInput;
}
