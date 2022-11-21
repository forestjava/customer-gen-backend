import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SmartPoleCreateInput } from "../../../inputs/SmartPoleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSmartPoleArgs {
  @TypeGraphQL.Field(_type => SmartPoleCreateInput, {
    nullable: false
  })
  data!: SmartPoleCreateInput;
}
