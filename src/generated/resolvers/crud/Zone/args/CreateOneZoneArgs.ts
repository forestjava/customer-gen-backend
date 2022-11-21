import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZoneCreateInput } from "../../../inputs/ZoneCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneZoneArgs {
  @TypeGraphQL.Field(_type => ZoneCreateInput, {
    nullable: false
  })
  data!: ZoneCreateInput;
}
