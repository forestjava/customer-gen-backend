import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceTypeOrderByWithRelationInput } from "../../../inputs/DeviceTypeOrderByWithRelationInput";
import { DeviceTypeWhereInput } from "../../../inputs/DeviceTypeWhereInput";
import { DeviceTypeWhereUniqueInput } from "../../../inputs/DeviceTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateDeviceTypeArgs {
  @TypeGraphQL.Field(_type => DeviceTypeWhereInput, {
    nullable: true
  })
  where?: DeviceTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeviceTypeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DeviceTypeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DeviceTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: DeviceTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
