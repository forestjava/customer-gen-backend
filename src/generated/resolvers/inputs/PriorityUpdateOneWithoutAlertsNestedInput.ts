import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriorityCreateOrConnectWithoutAlertsInput } from "../inputs/PriorityCreateOrConnectWithoutAlertsInput";
import { PriorityCreateWithoutAlertsInput } from "../inputs/PriorityCreateWithoutAlertsInput";
import { PriorityUpdateWithoutAlertsInput } from "../inputs/PriorityUpdateWithoutAlertsInput";
import { PriorityUpsertWithoutAlertsInput } from "../inputs/PriorityUpsertWithoutAlertsInput";
import { PriorityWhereUniqueInput } from "../inputs/PriorityWhereUniqueInput";

@TypeGraphQL.InputType("PriorityUpdateOneWithoutAlertsNestedInput", {
  isAbstract: true
})
export class PriorityUpdateOneWithoutAlertsNestedInput {
  @TypeGraphQL.Field(_type => PriorityCreateWithoutAlertsInput, {
    nullable: true
  })
  create?: PriorityCreateWithoutAlertsInput | undefined;

  @TypeGraphQL.Field(_type => PriorityCreateOrConnectWithoutAlertsInput, {
    nullable: true
  })
  connectOrCreate?: PriorityCreateOrConnectWithoutAlertsInput | undefined;

  @TypeGraphQL.Field(_type => PriorityUpsertWithoutAlertsInput, {
    nullable: true
  })
  upsert?: PriorityUpsertWithoutAlertsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PriorityWhereUniqueInput, {
    nullable: true
  })
  connect?: PriorityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PriorityUpdateWithoutAlertsInput, {
    nullable: true
  })
  update?: PriorityUpdateWithoutAlertsInput | undefined;
}
