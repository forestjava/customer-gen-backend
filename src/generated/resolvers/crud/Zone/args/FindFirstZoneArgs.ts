import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZoneOrderByWithRelationInput } from "../../../inputs/ZoneOrderByWithRelationInput";
import { ZoneWhereInput } from "../../../inputs/ZoneWhereInput";
import { ZoneWhereUniqueInput } from "../../../inputs/ZoneWhereUniqueInput";
import { ZoneScalarFieldEnum } from "../../../../enums/ZoneScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstZoneArgs {
  @TypeGraphQL.Field(_type => ZoneWhereInput, {
    nullable: true
  })
  where?: ZoneWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ZoneOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ZoneOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ZoneWhereUniqueInput, {
    nullable: true
  })
  cursor?: ZoneWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ZoneScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "formationId"> | undefined;
}
