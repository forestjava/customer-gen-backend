import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormationCreateManyInput } from "../../../inputs/FormationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFormationArgs {
  @TypeGraphQL.Field(_type => [FormationCreateManyInput], {
    nullable: false
  })
  data!: FormationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
