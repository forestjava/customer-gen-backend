import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertCreateManyPriorityInput } from "../inputs/AlertCreateManyPriorityInput";

@TypeGraphQL.InputType("AlertCreateManyPriorityInputEnvelope", {
  isAbstract: true
})
export class AlertCreateManyPriorityInputEnvelope {
  @TypeGraphQL.Field(_type => [AlertCreateManyPriorityInput], {
    nullable: false
  })
  data!: AlertCreateManyPriorityInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
