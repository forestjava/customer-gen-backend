import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceWhereInput } from "../../../inputs/DeviceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDeviceArgs {
  @TypeGraphQL.Field(_type => DeviceWhereInput, {
    nullable: true
  })
  where?: DeviceWhereInput | undefined;
}
