import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SmartPoleUpdateManyMutationInput } from "../../../inputs/SmartPoleUpdateManyMutationInput";
import { SmartPoleWhereInput } from "../../../inputs/SmartPoleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySmartPoleArgs {
  @TypeGraphQL.Field(_type => SmartPoleUpdateManyMutationInput, {
    nullable: false
  })
  data!: SmartPoleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SmartPoleWhereInput, {
    nullable: true
  })
  where?: SmartPoleWhereInput | undefined;
}
