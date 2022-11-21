import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTypeUpdateInput } from "../../../inputs/DeviceTypeUpdateInput";
import { DeviceTypeWhereUniqueInput } from "../../../inputs/DeviceTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDeviceTypeArgs {
  @TypeGraphQL.Field(_type => DeviceTypeUpdateInput, {
    nullable: false
  })
  data!: DeviceTypeUpdateInput;

  @TypeGraphQL.Field(_type => DeviceTypeWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceTypeWhereUniqueInput;
}
