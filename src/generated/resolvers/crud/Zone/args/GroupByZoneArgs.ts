import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZoneOrderByWithAggregationInput } from "../../../inputs/ZoneOrderByWithAggregationInput";
import { ZoneScalarWhereWithAggregatesInput } from "../../../inputs/ZoneScalarWhereWithAggregatesInput";
import { ZoneWhereInput } from "../../../inputs/ZoneWhereInput";
import { ZoneScalarFieldEnum } from "../../../../enums/ZoneScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByZoneArgs {
  @TypeGraphQL.Field(_type => ZoneWhereInput, {
    nullable: true
  })
  where?: ZoneWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ZoneOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ZoneOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ZoneScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "formationId">;

  @TypeGraphQL.Field(_type => ZoneScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ZoneScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
