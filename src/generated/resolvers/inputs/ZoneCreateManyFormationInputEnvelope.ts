import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZoneCreateManyFormationInput } from "../inputs/ZoneCreateManyFormationInput";

@TypeGraphQL.InputType("ZoneCreateManyFormationInputEnvelope", {
  isAbstract: true
})
export class ZoneCreateManyFormationInputEnvelope {
  @TypeGraphQL.Field(_type => [ZoneCreateManyFormationInput], {
    nullable: false
  })
  data!: ZoneCreateManyFormationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
