import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SmartPoleUpdateInput } from "../../../inputs/SmartPoleUpdateInput";
import { SmartPoleWhereUniqueInput } from "../../../inputs/SmartPoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSmartPoleArgs {
  @TypeGraphQL.Field(_type => SmartPoleUpdateInput, {
    nullable: false
  })
  data!: SmartPoleUpdateInput;

  @TypeGraphQL.Field(_type => SmartPoleWhereUniqueInput, {
    nullable: false
  })
  where!: SmartPoleWhereUniqueInput;
}
