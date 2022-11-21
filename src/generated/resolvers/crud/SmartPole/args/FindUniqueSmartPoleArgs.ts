import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SmartPoleWhereUniqueInput } from "../../../inputs/SmartPoleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSmartPoleArgs {
  @TypeGraphQL.Field(_type => SmartPoleWhereUniqueInput, {
    nullable: false
  })
  where!: SmartPoleWhereUniqueInput;
}
