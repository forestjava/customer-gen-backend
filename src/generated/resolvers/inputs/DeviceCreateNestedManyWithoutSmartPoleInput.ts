import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateManySmartPoleInputEnvelope } from "../inputs/DeviceCreateManySmartPoleInputEnvelope";
import { DeviceCreateOrConnectWithoutSmartPoleInput } from "../inputs/DeviceCreateOrConnectWithoutSmartPoleInput";
import { DeviceCreateWithoutSmartPoleInput } from "../inputs/DeviceCreateWithoutSmartPoleInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceCreateNestedManyWithoutSmartPoleInput", {
  isAbstract: true
})
export class DeviceCreateNestedManyWithoutSmartPoleInput {
  @TypeGraphQL.Field(_type => [DeviceCreateWithoutSmartPoleInput], {
    nullable: true
  })
  create?: DeviceCreateWithoutSmartPoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceCreateOrConnectWithoutSmartPoleInput], {
    nullable: true
  })
  connectOrCreate?: DeviceCreateOrConnectWithoutSmartPoleInput[] | undefined;

  @TypeGraphQL.Field(_type => DeviceCreateManySmartPoleInputEnvelope, {
    nullable: true
  })
  createMany?: DeviceCreateManySmartPoleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DeviceWhereUniqueInput], {
    nullable: true
  })
  connect?: DeviceWhereUniqueInput[] | undefined;
}
