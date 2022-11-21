import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserGroupOrderByWithRelationInput } from "../../../inputs/UserGroupOrderByWithRelationInput";
import { UserGroupWhereInput } from "../../../inputs/UserGroupWhereInput";
import { UserGroupWhereUniqueInput } from "../../../inputs/UserGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateUserGroupArgs {
  @TypeGraphQL.Field(_type => UserGroupWhereInput, {
    nullable: true
  })
  where?: UserGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserGroupOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserGroupOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserGroupWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserGroupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
