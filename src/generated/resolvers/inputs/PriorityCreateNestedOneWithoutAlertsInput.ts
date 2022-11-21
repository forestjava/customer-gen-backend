import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriorityCreateOrConnectWithoutAlertsInput } from "../inputs/PriorityCreateOrConnectWithoutAlertsInput";
import { PriorityCreateWithoutAlertsInput } from "../inputs/PriorityCreateWithoutAlertsInput";
import { PriorityWhereUniqueInput } from "../inputs/PriorityWhereUniqueInput";

@TypeGraphQL.InputType("PriorityCreateNestedOneWithoutAlertsInput", {
  isAbstract: true
})
export class PriorityCreateNestedOneWithoutAlertsInput {
  @TypeGraphQL.Field(_type => PriorityCreateWithoutAlertsInput, {
    nullable: true
  })
  create?: PriorityCreateWithoutAlertsInput | undefined;

  @TypeGraphQL.Field(_type => PriorityCreateOrConnectWithoutAlertsInput, {
    nullable: true
  })
  connectOrCreate?: PriorityCreateOrConnectWithoutAlertsInput | undefined;

  @TypeGraphQL.Field(_type => PriorityWhereUniqueInput, {
    nullable: true
  })
  connect?: PriorityWhereUniqueInput | undefined;
}
