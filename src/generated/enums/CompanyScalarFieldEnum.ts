import * as TypeGraphQL from "type-graphql";

export enum CompanyScalarFieldEnum {
  id = "id",
  name = "name",
  icon = "icon",
  logo = "logo"
}
TypeGraphQL.registerEnumType(CompanyScalarFieldEnum, {
  name: "CompanyScalarFieldEnum",
  description: undefined,
});
