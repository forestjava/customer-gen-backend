import * as TypeGraphQL from "type-graphql";

export enum UserGroupScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  color = "color"
}
TypeGraphQL.registerEnumType(UserGroupScalarFieldEnum, {
  name: "UserGroupScalarFieldEnum",
  description: undefined,
});
