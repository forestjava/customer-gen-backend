import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTypeUpdateManyMutationInput } from "../../../inputs/DeviceTypeUpdateManyMutationInput";
import { DeviceTypeWhereInput } from "../../../inputs/DeviceTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDeviceTypeArgs {
  @TypeGraphQL.Field(_type => DeviceTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: DeviceTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DeviceTypeWhereInput, {
    nullable: true
  })
  where?: DeviceTypeWhereInput | undefined;
}
