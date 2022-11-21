import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlertUpdateInput } from "../../../inputs/AlertUpdateInput";
import { AlertWhereUniqueInput } from "../../../inputs/AlertWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAlertArgs {
  @TypeGraphQL.Field(_type => AlertUpdateInput, {
    nullable: false
  })
  data!: AlertUpdateInput;

  @TypeGraphQL.Field(_type => AlertWhereUniqueInput, {
    nullable: false
  })
  where!: AlertWhereUniqueInput;
}
