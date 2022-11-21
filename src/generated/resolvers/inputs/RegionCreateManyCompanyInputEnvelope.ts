import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateManyCompanyInput } from "../inputs/RegionCreateManyCompanyInput";

@TypeGraphQL.InputType("RegionCreateManyCompanyInputEnvelope", {
  isAbstract: true
})
export class RegionCreateManyCompanyInputEnvelope {
  @TypeGraphQL.Field(_type => [RegionCreateManyCompanyInput], {
    nullable: false
  })
  data!: RegionCreateManyCompanyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
