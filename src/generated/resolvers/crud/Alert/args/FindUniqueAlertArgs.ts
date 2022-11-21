import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlertWhereUniqueInput } from "../../../inputs/AlertWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAlertArgs {
  @TypeGraphQL.Field(_type => AlertWhereUniqueInput, {
    nullable: false
  })
  where!: AlertWhereUniqueInput;
}
