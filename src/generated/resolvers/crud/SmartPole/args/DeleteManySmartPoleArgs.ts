import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SmartPoleWhereInput } from "../../../inputs/SmartPoleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySmartPoleArgs {
  @TypeGraphQL.Field(_type => SmartPoleWhereInput, {
    nullable: true
  })
  where?: SmartPoleWhereInput | undefined;
}
