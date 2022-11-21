import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionScalarWhereInput } from "../inputs/RegionScalarWhereInput";
import { RegionUpdateManyMutationInput } from "../inputs/RegionUpdateManyMutationInput";

@TypeGraphQL.InputType("RegionUpdateManyWithWhereWithoutCompanyInput", {
  isAbstract: true
})
export class RegionUpdateManyWithWhereWithoutCompanyInput {
  @TypeGraphQL.Field(_type => RegionScalarWhereInput, {
    nullable: false
  })
  where!: RegionScalarWhereInput;

  @TypeGraphQL.Field(_type => RegionUpdateManyMutationInput, {
    nullable: false
  })
  data!: RegionUpdateManyMutationInput;
}
