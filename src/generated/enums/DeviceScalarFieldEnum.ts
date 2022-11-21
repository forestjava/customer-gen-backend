import * as TypeGraphQL from "type-graphql";

export enum DeviceScalarFieldEnum {
  id = "id",
  name = "name",
  serial = "serial",
  uuid = "uuid",
  typeId = "typeId",
  connectParamIndex = "connectParamIndex",
  smartPoleId = "smartPoleId"
}
TypeGraphQL.registerEnumType(DeviceScalarFieldEnum, {
  name: "DeviceScalarFieldEnum",
  description: undefined,
});
