import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTypeWhereUniqueInput } from "../../../inputs/DeviceTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneDeviceTypeArgs {
  @TypeGraphQL.Field(_type => DeviceTypeWhereUniqueInput, {
    nullable: false
  })
  where!: DeviceTypeWhereUniqueInput;
}
