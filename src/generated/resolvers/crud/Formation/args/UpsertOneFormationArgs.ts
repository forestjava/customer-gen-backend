import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormationCreateInput } from "../../../inputs/FormationCreateInput";
import { FormationUpdateInput } from "../../../inputs/FormationUpdateInput";
import { FormationWhereUniqueInput } from "../../../inputs/FormationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFormationArgs {
  @TypeGraphQL.Field(_type => FormationWhereUniqueInput, {
    nullable: false
  })
  where!: FormationWhereUniqueInput;

  @TypeGraphQL.Field(_type => FormationCreateInput, {
    nullable: false
  })
  create!: FormationCreateInput;

  @TypeGraphQL.Field(_type => FormationUpdateInput, {
    nullable: false
  })
  update!: FormationUpdateInput;
}
