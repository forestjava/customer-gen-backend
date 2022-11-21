import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateManyTypeInput } from "../inputs/DeviceCreateManyTypeInput";

@TypeGraphQL.InputType("DeviceCreateManyTypeInputEnvelope", {
  isAbstract: true
})
export class DeviceCreateManyTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [DeviceCreateManyTypeInput], {
    nullable: false
  })
  data!: DeviceCreateManyTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
