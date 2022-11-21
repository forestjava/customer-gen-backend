import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriorityUpdateInput } from "../../../inputs/PriorityUpdateInput";
import { PriorityWhereUniqueInput } from "../../../inputs/PriorityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePriorityArgs {
  @TypeGraphQL.Field(_type => PriorityUpdateInput, {
    nullable: false
  })
  data!: PriorityUpdateInput;

  @TypeGraphQL.Field(_type => PriorityWhereUniqueInput, {
    nullable: false
  })
  where!: PriorityWhereUniqueInput;
}
