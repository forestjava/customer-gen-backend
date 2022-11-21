import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceUpdateManyMutationInput } from "../../../inputs/DeviceUpdateManyMutationInput";
import { DeviceWhereInput } from "../../../inputs/DeviceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDeviceArgs {
  @TypeGraphQL.Field(_type => DeviceUpdateManyMutationInput, {
    nullable: false
  })
  data!: DeviceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DeviceWhereInput, {
    nullable: true
  })
  where?: DeviceWhereInput | undefined;
}
