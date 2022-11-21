import * as TypeGraphQL from "type-graphql";

export enum FormationScalarFieldEnum {
  id = "id",
  name = "name",
  address = "address",
  regionId = "regionId"
}
TypeGraphQL.registerEnumType(FormationScalarFieldEnum, {
  name: "FormationScalarFieldEnum",
  description: undefined,
});
