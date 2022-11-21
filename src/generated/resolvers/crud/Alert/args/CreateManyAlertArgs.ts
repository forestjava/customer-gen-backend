import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlertCreateManyInput } from "../../../inputs/AlertCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAlertArgs {
  @TypeGraphQL.Field(_type => [AlertCreateManyInput], {
    nullable: false
  })
  data!: AlertCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
