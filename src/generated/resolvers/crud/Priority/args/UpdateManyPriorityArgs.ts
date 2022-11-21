import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriorityUpdateManyMutationInput } from "../../../inputs/PriorityUpdateManyMutationInput";
import { PriorityWhereInput } from "../../../inputs/PriorityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPriorityArgs {
  @TypeGraphQL.Field(_type => PriorityUpdateManyMutationInput, {
    nullable: false
  })
  data!: PriorityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PriorityWhereInput, {
    nullable: true
  })
  where?: PriorityWhereInput | undefined;
}
