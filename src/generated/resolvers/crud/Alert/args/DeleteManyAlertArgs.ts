import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlertWhereInput } from "../../../inputs/AlertWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAlertArgs {
  @TypeGraphQL.Field(_type => AlertWhereInput, {
    nullable: true
  })
  where?: AlertWhereInput | undefined;
}
