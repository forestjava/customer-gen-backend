import * as TypeGraphQL from "type-graphql";

export enum SmartPoleScalarFieldEnum {
  id = "id",
  connectLocationId = "connectLocationId",
  connectDeviceId = "connectDeviceId",
  name = "name",
  serial = "serial",
  latitude = "latitude",
  longitude = "longitude",
  zoneId = "zoneId"
}
TypeGraphQL.registerEnumType(SmartPoleScalarFieldEnum, {
  name: "SmartPoleScalarFieldEnum",
  description: undefined,
});
