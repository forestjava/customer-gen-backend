import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PriorityCreateOrConnectWithoutEventsInput } from "../inputs/PriorityCreateOrConnectWithoutEventsInput";
import { PriorityCreateWithoutEventsInput } from "../inputs/PriorityCreateWithoutEventsInput";
import { PriorityUpdateWithoutEventsInput } from "../inputs/PriorityUpdateWithoutEventsInput";
import { PriorityUpsertWithoutEventsInput } from "../inputs/PriorityUpsertWithoutEventsInput";
import { PriorityWhereUniqueInput } from "../inputs/PriorityWhereUniqueInput";

@TypeGraphQL.InputType("PriorityUpdateOneWithoutEventsNestedInput", {
  isAbstract: true
})
export class PriorityUpdateOneWithoutEventsNestedInput {
  @TypeGraphQL.Field(_type => PriorityCreateWithoutEventsInput, {
    nullable: true
  })
  create?: PriorityCreateWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => PriorityCreateOrConnectWithoutEventsInput, {
    nullable: true
  })
  connectOrCreate?: PriorityCreateOrConnectWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => PriorityUpsertWithoutEventsInput, {
    nullable: true
  })
  upsert?: PriorityUpsertWithoutEventsInput | undefined;

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

  @TypeGraphQL.Field(_type => PriorityUpdateWithoutEventsInput, {
    nullable: true
  })
  update?: PriorityUpdateWithoutEventsInput | undefined;
}
