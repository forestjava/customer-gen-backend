import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlertCreateInput } from "../../../inputs/AlertCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAlertArgs {
  @TypeGraphQL.Field(_type => AlertCreateInput, {
    nullable: false
  })
  data!: AlertCreateInput;
}
