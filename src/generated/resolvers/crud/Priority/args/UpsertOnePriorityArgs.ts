import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriorityCreateInput } from "../../../inputs/PriorityCreateInput";
import { PriorityUpdateInput } from "../../../inputs/PriorityUpdateInput";
import { PriorityWhereUniqueInput } from "../../../inputs/PriorityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePriorityArgs {
  @TypeGraphQL.Field(_type => PriorityWhereUniqueInput, {
    nullable: false
  })
  where!: PriorityWhereUniqueInput;

  @TypeGraphQL.Field(_type => PriorityCreateInput, {
    nullable: false
  })
  create!: PriorityCreateInput;

  @TypeGraphQL.Field(_type => PriorityUpdateInput, {
    nullable: false
  })
  update!: PriorityUpdateInput;
}
