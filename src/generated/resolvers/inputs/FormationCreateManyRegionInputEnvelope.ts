import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateManyRegionInput } from "../inputs/FormationCreateManyRegionInput";

@TypeGraphQL.InputType("FormationCreateManyRegionInputEnvelope", {
  isAbstract: true
})
export class FormationCreateManyRegionInputEnvelope {
  @TypeGraphQL.Field(_type => [FormationCreateManyRegionInput], {
    nullable: false
  })
  data!: FormationCreateManyRegionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
