import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormationUpdateInput } from "../../../inputs/FormationUpdateInput";
import { FormationWhereUniqueInput } from "../../../inputs/FormationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneFormationArgs {
  @TypeGraphQL.Field(_type => FormationUpdateInput, {
    nullable: false
  })
  data!: FormationUpdateInput;

  @TypeGraphQL.Field(_type => FormationWhereUniqueInput, {
    nullable: false
  })
  where!: FormationWhereUniqueInput;
}
