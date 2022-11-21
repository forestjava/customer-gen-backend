import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZoneWhereInput } from "../../../inputs/ZoneWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyZoneArgs {
  @TypeGraphQL.Field(_type => ZoneWhereInput, {
    nullable: true
  })
  where?: ZoneWhereInput | undefined;
}
