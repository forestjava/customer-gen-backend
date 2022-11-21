import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriorityWhereInput } from "../../../inputs/PriorityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPriorityArgs {
  @TypeGraphQL.Field(_type => PriorityWhereInput, {
    nullable: true
  })
  where?: PriorityWhereInput | undefined;
}
