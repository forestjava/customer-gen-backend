import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateNestedManyWithoutTypeInput } from "../inputs/DeviceCreateNestedManyWithoutTypeInput";

@TypeGraphQL.InputType("DeviceTypeCreateInput", {
  isAbstract: true
})
export class DeviceTypeCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => DeviceCreateNestedManyWithoutTypeInput, {
    nullable: true
  })
  devices?: DeviceCreateNestedManyWithoutTypeInput | undefined;
}
