import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceCreateManyInput } from "../../../inputs/DeviceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDeviceArgs {
  @TypeGraphQL.Field(_type => [DeviceCreateManyInput], {
    nullable: false
  })
  data!: DeviceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
