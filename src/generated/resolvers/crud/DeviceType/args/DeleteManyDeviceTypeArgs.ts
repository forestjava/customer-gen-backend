import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTypeWhereInput } from "../../../inputs/DeviceTypeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDeviceTypeArgs {
  @TypeGraphQL.Field(_type => DeviceTypeWhereInput, {
    nullable: true
  })
  where?: DeviceTypeWhereInput | undefined;
}
