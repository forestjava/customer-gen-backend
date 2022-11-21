import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTypeCreateInput } from "../../../inputs/DeviceTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDeviceTypeArgs {
  @TypeGraphQL.Field(_type => DeviceTypeCreateInput, {
    nullable: false
  })
  data!: DeviceTypeCreateInput;
}
