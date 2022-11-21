import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZoneWhereUniqueInput } from "../../../inputs/ZoneWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneZoneArgs {
  @TypeGraphQL.Field(_type => ZoneWhereUniqueInput, {
    nullable: false
  })
  where!: ZoneWhereUniqueInput;
}
