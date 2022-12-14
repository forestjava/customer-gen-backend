import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserRoleCreateManyInput } from "../../../inputs/UserRoleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserRoleArgs {
  @TypeGraphQL.Field(_type => [UserRoleCreateManyInput], {
    nullable: false
  })
  data!: UserRoleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
