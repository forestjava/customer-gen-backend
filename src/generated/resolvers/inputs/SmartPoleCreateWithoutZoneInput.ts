import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateNestedManyWithoutSmartPoleInput } from "../inputs/DeviceCreateNestedManyWithoutSmartPoleInput";

@TypeGraphQL.InputType("SmartPoleCreateWithoutZoneInput", {
  isAbstract: true
})
export class SmartPoleCreateWithoutZoneInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  connectLocationId?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  connectDeviceId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serial?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  latitude?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  longitude?: number | undefined;

  @TypeGraphQL.Field(_type => DeviceCreateNestedManyWithoutSmartPoleInput, {
    nullable: true
  })
  devices?: DeviceCreateNestedManyWithoutSmartPoleInput | undefined;
}
