import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormationUpdateManyMutationInput } from "../../../inputs/FormationUpdateManyMutationInput";
import { FormationWhereInput } from "../../../inputs/FormationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFormationArgs {
  @TypeGraphQL.Field(_type => FormationUpdateManyMutationInput, {
    nullable: false
  })
  data!: FormationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FormationWhereInput, {
    nullable: true
  })
  where?: FormationWhereInput | undefined;
}
