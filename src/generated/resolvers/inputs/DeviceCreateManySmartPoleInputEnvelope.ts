import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateManySmartPoleInput } from "../inputs/DeviceCreateManySmartPoleInput";

@TypeGraphQL.InputType("DeviceCreateManySmartPoleInputEnvelope", {
  isAbstract: true
})
export class DeviceCreateManySmartPoleInputEnvelope {
  @TypeGraphQL.Field(_type => [DeviceCreateManySmartPoleInput], {
    nullable: false
  })
  data!: DeviceCreateManySmartPoleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
