import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTypeCreateInput } from "../../../inputs/DeviceTypeCreateInput";
import { DeviceTypeUpdateInput } from "../../../inputs/DeviceTypeUpdateInput";
import { DeviceTypeWhereUniqueInput } from "../../../inputs/DeviceTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneDeviceTypeArgs {
  @TypeGraphQL.Field(_type => DeviceTypeWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeviceTypeCreateInput, {
    nullable: false
  })
  create!: DeviceTypeCreateInput;

  @TypeGraphQL.Field(_type => DeviceTypeUpdateInput, {
    nullable: false
  })
  update!: DeviceTypeUpdateInput;
}
