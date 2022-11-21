import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceUpdateInput } from "../../../inputs/DeviceUpdateInput";
import { DeviceWhereUniqueInput } from "../../../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDeviceArgs {
  @TypeGraphQL.Field(_type => DeviceUpdateInput, {
    nullable: false
  })
  data!: DeviceUpdateInput;

  @TypeGraphQL.Field(_type => DeviceWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceWhereUniqueInput;
}
