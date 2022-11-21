import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZoneCreateInput } from "../../../inputs/ZoneCreateInput";
import { ZoneUpdateInput } from "../../../inputs/ZoneUpdateInput";
import { ZoneWhereUniqueInput } from "../../../inputs/ZoneWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneZoneArgs {
  @TypeGraphQL.Field(_type => ZoneWhereUniqueInput, {
    nullable: false
  })
  where!: ZoneWhereUniqueInput;

  @TypeGraphQL.Field(_type => ZoneCreateInput, {
    nullable: false
  })
  create!: ZoneCreateInput;

  @TypeGraphQL.Field(_type => ZoneUpdateInput, {
    nullable: false
  })
  update!: ZoneUpdateInput;
}
