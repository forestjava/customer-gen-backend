import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeviceCreateManyTypeInputEnvelope } from "../inputs/DeviceCreateManyTypeInputEnvelope";
import { DeviceCreateOrConnectWithoutTypeInput } from "../inputs/DeviceCreateOrConnectWithoutTypeInput";
import { DeviceCreateWithoutTypeInput } from "../inputs/DeviceCreateWithoutTypeInput";
import { DeviceWhereUniqueInput } from "../inputs/DeviceWhereUniqueInput";

@TypeGraphQL.InputType("DeviceCreateNestedManyWithoutTypeInput", {
  isAbstract: true
})
export class DeviceCreateNestedManyWithoutTypeInput {
  @TypeGraphQL.Field(_type => [DeviceCreateWithoutTypeInput], {
    nullable: true
  })
  create?: DeviceCreateWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceCreateOrConnectWithoutTypeInput], {
    nullable: true
  })
  connectOrCreate?: DeviceCreateOrConnectWithoutTypeInput[] | undefined;

  @TypeGraphQL.Field(_type => DeviceCreateManyTypeInputEnvelope, {
    nullable: true
  })
  createMany?: DeviceCreateManyTypeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [DeviceWhereUniqueInput], {
    nullable: true
  })
  connect?: DeviceWhereUniqueInput[] | undefined;
}
