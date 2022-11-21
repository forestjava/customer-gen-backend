import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SmartPoleCreateInput } from "../../../inputs/SmartPoleCreateInput";
import { SmartPoleUpdateInput } from "../../../inputs/SmartPoleUpdateInput";
import { SmartPoleWhereUniqueInput } from "../../../inputs/SmartPoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSmartPoleArgs {
  @TypeGraphQL.Field(_type => SmartPoleWhereUniqueInput, {
    nullable: false
  })
  where!: SmartPoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => SmartPoleCreateInput, {
    nullable: false
  })
  create!: SmartPoleCreateInput;

  @TypeGraphQL.Field(_type => SmartPoleUpdateInput, {
    nullable: false
  })
  update!: SmartPoleUpdateInput;
}
