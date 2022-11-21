import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceScalarWhereInput } from "../inputs/DeviceScalarWhereInput";
import { DeviceUpdateManyMutationInput } from "../inputs/DeviceUpdateManyMutationInput";

@TypeGraphQL.InputType("DeviceUpdateManyWithWhereWithoutSmartPoleInput", {
  isAbstract: true
})
export class DeviceUpdateManyWithWhereWithoutSmartPoleInput {
  @TypeGraphQL.Field(_type => DeviceScalarWhereInput, {
    nullable: false
  })
  where!: DeviceScalarWhereInput;

  @TypeGraphQL.Field(_type => DeviceUpdateManyMutationInput, {
    nullable: false
  })
  data!: DeviceUpdateManyMutationInput;
}
