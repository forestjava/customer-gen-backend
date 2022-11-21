import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormationCreateInput } from "../../../inputs/FormationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneFormationArgs {
  @TypeGraphQL.Field(_type => FormationCreateInput, {
    nullable: false
  })
  data!: FormationCreateInput;
}
