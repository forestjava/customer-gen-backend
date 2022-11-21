import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ZoneCreateOrConnectWithoutSmartPolesInput } from "../inputs/ZoneCreateOrConnectWithoutSmartPolesInput";
import { ZoneCreateWithoutSmartPolesInput } from "../inputs/ZoneCreateWithoutSmartPolesInput";
import { ZoneUpdateWithoutSmartPolesInput } from "../inputs/ZoneUpdateWithoutSmartPolesInput";
import { ZoneUpsertWithoutSmartPolesInput } from "../inputs/ZoneUpsertWithoutSmartPolesInput";
import { ZoneWhereUniqueInput } from "../inputs/ZoneWhereUniqueInput";

@TypeGraphQL.InputType("ZoneUpdateOneWithoutSmartPolesNestedInput", {
  isAbstract: true
})
export class ZoneUpdateOneWithoutSmartPolesNestedInput {
  @TypeGraphQL.Field(_type => ZoneCreateWithoutSmartPolesInput, {
    nullable: true
  })
  create?: ZoneCreateWithoutSmartPolesInput | undefined;

  @TypeGraphQL.Field(_type => ZoneCreateOrConnectWithoutSmartPolesInput, {
    nullable: true
  })
  connectOrCreate?: ZoneCreateOrConnectWithoutSmartPolesInput | undefined;

  @TypeGraphQL.Field(_type => ZoneUpsertWithoutSmartPolesInput, {
    nullable: true
  })
  upsert?: ZoneUpsertWithoutSmartPolesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ZoneWhereUniqueInput, {
    nullable: true
  })
  connect?: ZoneWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ZoneUpdateWithoutSmartPolesInput, {
    nullable: true
  })
  update?: ZoneUpdateWithoutSmartPolesInput | undefined;
}
