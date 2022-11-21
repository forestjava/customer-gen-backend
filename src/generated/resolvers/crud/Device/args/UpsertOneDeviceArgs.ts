import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceCreateInput } from "../../../inputs/DeviceCreateInput";
import { DeviceUpdateInput } from "../../../inputs/DeviceUpdateInput";
import { DeviceWhereUniqueInput } from "../../../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDeviceArgs {
  @TypeGraphQL.Field(_type => DeviceWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeviceCreateInput, {
    nullable: false
  })
  create!: DeviceCreateInput;

  @TypeGraphQL.Field(_type => DeviceUpdateInput, {
    nullable: false
  })
  update!: DeviceUpdateInput;
}
