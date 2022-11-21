import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlertCreateInput } from "../../../inputs/AlertCreateInput";
import { AlertUpdateInput } from "../../../inputs/AlertUpdateInput";
import { AlertWhereUniqueInput } from "../../../inputs/AlertWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAlertArgs {
  @TypeGraphQL.Field(_type => AlertWhereUniqueInput, {
    nullable: false
  })
  where!: AlertWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlertCreateInput, {
    nullable: false
  })
  create!: AlertCreateInput;

  @TypeGraphQL.Field(_type => AlertUpdateInput, {
    nullable: false
  })
  update!: AlertUpdateInput;
}
