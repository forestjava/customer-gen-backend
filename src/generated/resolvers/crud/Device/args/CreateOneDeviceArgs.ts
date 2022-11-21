import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceCreateInput } from "../../../inputs/DeviceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDeviceArgs {
  @TypeGraphQL.Field(_type => DeviceCreateInput, {
    nullable: false
  })
  data!: DeviceCreateInput;
}
