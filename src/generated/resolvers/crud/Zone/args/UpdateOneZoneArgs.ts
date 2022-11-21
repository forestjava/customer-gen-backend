import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZoneUpdateInput } from "../../../inputs/ZoneUpdateInput";
import { ZoneWhereUniqueInput } from "../../../inputs/ZoneWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneZoneArgs {
  @TypeGraphQL.Field(_type => ZoneUpdateInput, {
    nullable: false
  })
  data!: ZoneUpdateInput;

  @TypeGraphQL.Field(_type => ZoneWhereUniqueInput, {
    nullable: false
  })
  where!: ZoneWhereUniqueInput;
}
