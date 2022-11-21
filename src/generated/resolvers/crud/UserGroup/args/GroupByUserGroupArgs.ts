import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserGroupOrderByWithAggregationInput } from "../../../inputs/UserGroupOrderByWithAggregationInput";
import { UserGroupScalarWhereWithAggregatesInput } from "../../../inputs/UserGroupScalarWhereWithAggregatesInput";
import { UserGroupWhereInput } from "../../../inputs/UserGroupWhereInput";
import { UserGroupScalarFieldEnum } from "../../../../enums/UserGroupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserGroupArgs {
  @TypeGraphQL.Field(_type => UserGroupWhereInput, {
    nullable: true
  })
  where?: UserGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserGroupOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserGroupOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserGroupScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "color">;

  @TypeGraphQL.Field(_type => UserGroupScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserGroupScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
