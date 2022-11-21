import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTypeCreateManyInput } from "../../../inputs/DeviceTypeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDeviceTypeArgs {
  @TypeGraphQL.Field(_type => [DeviceTypeCreateManyInput], {
    nullable: false
  })
  data!: DeviceTypeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
