import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ZoneUpdateManyMutationInput } from "../../../inputs/ZoneUpdateManyMutationInput";
import { ZoneWhereInput } from "../../../inputs/ZoneWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyZoneArgs {
  @TypeGraphQL.Field(_type => ZoneUpdateManyMutationInput, {
    nullable: false
  })
  data!: ZoneUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ZoneWhereInput, {
    nullable: true
  })
  where?: ZoneWhereInput | undefined;
}
