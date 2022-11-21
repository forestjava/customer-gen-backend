import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZoneCreateManyInput } from "../../../inputs/ZoneCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyZoneArgs {
  @TypeGraphQL.Field(_type => [ZoneCreateManyInput], {
    nullable: false
  })
  data!: ZoneCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
