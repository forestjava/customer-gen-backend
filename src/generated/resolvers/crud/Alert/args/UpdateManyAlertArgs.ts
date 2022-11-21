import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlertUpdateManyMutationInput } from "../../../inputs/AlertUpdateManyMutationInput";
import { AlertWhereInput } from "../../../inputs/AlertWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAlertArgs {
  @TypeGraphQL.Field(_type => AlertUpdateManyMutationInput, {
    nullable: false
  })
  data!: AlertUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AlertWhereInput, {
    nullable: true
  })
  where?: AlertWhereInput | undefined;
}
