import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserGroupAvgAggregate } from "../outputs/UserGroupAvgAggregate";
import { UserGroupCountAggregate } from "../outputs/UserGroupCountAggregate";
import { UserGroupMaxAggregate } from "../outputs/UserGroupMaxAggregate";
import { UserGroupMinAggregate } from "../outputs/UserGroupMinAggregate";
import { UserGroupSumAggregate } from "../outputs/UserGroupSumAggregate";

@TypeGraphQL.ObjectType("UserGroupGroupBy", {
  isAbstract: true
})
export class UserGroupGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color!: string | null;

  @TypeGraphQL.Field(_type => UserGroupCountAggregate, {
    nullable: true
  })
  _count!: UserGroupCountAggregate | null;

  @TypeGraphQL.Field(_type => UserGroupAvgAggregate, {
    nullable: true
  })
  _avg!: UserGroupAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserGroupSumAggregate, {
    nullable: true
  })
  _sum!: UserGroupSumAggregate | null;

  @TypeGraphQL.Field(_type => UserGroupMinAggregate, {
    nullable: true
  })
  _min!: UserGroupMinAggregate | null;

  @TypeGraphQL.Field(_type => UserGroupMaxAggregate, {
    nullable: true
  })
  _max!: UserGroupMaxAggregate | null;
}
