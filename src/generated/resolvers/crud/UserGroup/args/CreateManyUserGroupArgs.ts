import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserGroupCreateManyInput } from "../../../inputs/UserGroupCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserGroupArgs {
  @TypeGraphQL.Field(_type => [UserGroupCreateManyInput], {
    nullable: false
  })
  data!: UserGroupCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
