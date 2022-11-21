import * as TypeGraphQL from "type-graphql";

export enum ZoneScalarFieldEnum {
  id = "id",
  name = "name",
  formationId = "formationId"
}
TypeGraphQL.registerEnumType(ZoneScalarFieldEnum, {
  name: "ZoneScalarFieldEnum",
  description: undefined,
});
