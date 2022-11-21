import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormationWhereUniqueInput } from "../../../inputs/FormationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFormationArgs {
  @TypeGraphQL.Field(_type => FormationWhereUniqueInput, {
    nullable: false
  })
  where!: FormationWhereUniqueInput;
}
