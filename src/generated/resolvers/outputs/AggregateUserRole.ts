import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserRoleAvgAggregate } from "../outputs/UserRoleAvgAggregate";
import { UserRoleCountAggregate } from "../outputs/UserRoleCountAggregate";
import { UserRoleMaxAggregate } from "../outputs/UserRoleMaxAggregate";
import { UserRoleMinAggregate } from "../outputs/UserRoleMinAggregate";
import { UserRoleSumAggregate } from "../outputs/UserRoleSumAggregate";

@TypeGraphQL.ObjectType("AggregateUserRole", {
  isAbstract: true
})
export class AggregateUserRole {
  @TypeGraphQL.Field(_type => UserRoleCountAggregate, {
    nullable: true
  })
  _count!: UserRoleCountAggregate | null;

  @TypeGraphQL.Field(_type => UserRoleAvgAggregate, {
    nullable: true
  })
  _avg!: UserRoleAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserRoleSumAggregate, {
    nullable: true
  })
  _sum!: UserRoleSumAggregate | null;

  @TypeGraphQL.Field(_type => UserRoleMinAggregate, {
    nullable: true
  })
  _min!: UserRoleMinAggregate | null;

  @TypeGraphQL.Field(_type => UserRoleMaxAggregate, {
    nullable: true
  })
  _max!: UserRoleMaxAggregate | null;
}
