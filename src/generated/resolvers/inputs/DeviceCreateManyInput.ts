import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("DeviceCreateManyInput", {
  isAbstract: true
})
export class DeviceCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  serial?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uuid?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  typeId?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  connectParamIndex?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  smartPoleId?: number | undefined;
}
