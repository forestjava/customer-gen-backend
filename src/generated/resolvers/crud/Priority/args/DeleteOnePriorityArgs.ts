import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriorityWhereUniqueInput } from "../../../inputs/PriorityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePriorityArgs {
  @TypeGraphQL.Field(_type => PriorityWhereUniqueInput, {
    nullable: false
  })
  where!: PriorityWhereUniqueInput;
}
