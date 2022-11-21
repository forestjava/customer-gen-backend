import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceWhereUniqueInput } from "../../../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDeviceArgs {
  @TypeGraphQL.Field(_type => DeviceWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceWhereUniqueInput;
}
