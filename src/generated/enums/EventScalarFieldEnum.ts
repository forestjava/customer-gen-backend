import * as TypeGraphQL from "type-graphql";

export enum EventScalarFieldEnum {
  id = "id",
  priorityId = "priorityId",
  moment = "moment",
  message = "message",
  deviceId = "deviceId"
}
TypeGraphQL.registerEnumType(EventScalarFieldEnum, {
  name: "EventScalarFieldEnum",
  description: undefined,
});
