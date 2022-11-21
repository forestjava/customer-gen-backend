import * as TypeGraphQL from "type-graphql";

export enum AlertScalarFieldEnum {
  id = "id",
  priorityId = "priorityId",
  deviceId = "deviceId",
  message = "message"
}
TypeGraphQL.registerEnumType(AlertScalarFieldEnum, {
  name: "AlertScalarFieldEnum",
  description: undefined,
});
