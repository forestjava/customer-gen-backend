import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  lastName = "lastName",
  firstName = "firstName",
  email = "email",
  roleId = "roleId",
  username = "username",
  avatar = "avatar",
  phone = "phone",
  jobTitle = "jobTitle"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
