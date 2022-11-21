import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeviceOrderByWithRelationInput } from "../../../inputs/DeviceOrderByWithRelationInput";
import { DeviceWhereInput } from "../../../inputs/DeviceWhereInput";
import { DeviceWhereUniqueInput } from "../../../inputs/DeviceWhereUniqueInput";
import { DeviceScalarFieldEnum } from "../../../../enums/DeviceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class DeviceTypeDevicesArgs {
  @TypeGraphQL.Field(_type => DeviceWhereInput, {
    nullable: true
  })
  where?: DeviceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeviceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: DeviceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => DeviceWhereUniqueInput, {
    nullable: true
  })
  cursor?: DeviceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [DeviceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "serial" | "uuid" | "typeId" | "connectParamIndex" | "smartPoleId"> | undefined;
}
