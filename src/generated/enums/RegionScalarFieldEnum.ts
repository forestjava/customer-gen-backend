import * as TypeGraphQL from "type-graphql";

export enum RegionScalarFieldEnum {
  id = "id",
  name = "name",
  companyId = "companyId"
}
TypeGraphQL.registerEnumType(RegionScalarFieldEnum, {
  name: "RegionScalarFieldEnum",
  description: undefined,
});
