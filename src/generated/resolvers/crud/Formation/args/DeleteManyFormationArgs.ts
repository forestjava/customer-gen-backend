import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormationWhereInput } from "../../../inputs/FormationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFormationArgs {
  @TypeGraphQL.Field(_type => FormationWhereInput, {
    nullable: true
  })
  where?: FormationWhereInput | undefined;
}
