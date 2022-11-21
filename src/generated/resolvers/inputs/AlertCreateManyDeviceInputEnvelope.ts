import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AlertCreateManyDeviceInput } from "../inputs/AlertCreateManyDeviceInput";

@TypeGraphQL.InputType("AlertCreateManyDeviceInputEnvelope", {
  isAbstract: true
})
export class AlertCreateManyDeviceInputEnvelope {
  @TypeGraphQL.Field(_type => [AlertCreateManyDeviceInput], {
    nullable: false
  })
  data!: AlertCreateManyDeviceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
