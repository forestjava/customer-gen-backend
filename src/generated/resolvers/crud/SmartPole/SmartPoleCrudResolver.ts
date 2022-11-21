import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSmartPoleArgs } from "./args/AggregateSmartPoleArgs";
import { CreateManySmartPoleArgs } from "./args/CreateManySmartPoleArgs";
import { CreateOneSmartPoleArgs } from "./args/CreateOneSmartPoleArgs";
import { DeleteManySmartPoleArgs } from "./args/DeleteManySmartPoleArgs";
import { DeleteOneSmartPoleArgs } from "./args/DeleteOneSmartPoleArgs";
import { FindFirstSmartPoleArgs } from "./args/FindFirstSmartPoleArgs";
import { FindManySmartPoleArgs } from "./args/FindManySmartPoleArgs";
import { FindUniqueSmartPoleArgs } from "./args/FindUniqueSmartPoleArgs";
import { GroupBySmartPoleArgs } from "./args/GroupBySmartPoleArgs";
import { UpdateManySmartPoleArgs } from "./args/UpdateManySmartPoleArgs";
import { UpdateOneSmartPoleArgs } from "./args/UpdateOneSmartPoleArgs";
import { UpsertOneSmartPoleArgs } from "./args/UpsertOneSmartPoleArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SmartPole } from "../../../models/SmartPole";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSmartPole } from "../../outputs/AggregateSmartPole";
import { SmartPoleGroupBy } from "../../outputs/SmartPoleGroupBy";

@TypeGraphQL.Resolver(_of => SmartPole)
export class SmartPoleCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSmartPole, {
    nullable: false
  })
  async aggregateSmartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSmartPoleArgs): Promise<AggregateSmartPole> {
    return getPrismaFromContext(ctx).smartPole.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySmartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySmartPoleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SmartPole, {
    nullable: false
  })
  async createOneSmartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSmartPoleArgs): Promise<SmartPole> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySmartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySmartPoleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SmartPole, {
    nullable: true
  })
  async deleteOneSmartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSmartPoleArgs): Promise<SmartPole | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SmartPole, {
    nullable: true
  })
  async findFirstSmartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSmartPoleArgs): Promise<SmartPole | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SmartPole], {
    nullable: false
  })
  async smartPoles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySmartPoleArgs): Promise<SmartPole[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SmartPole, {
    nullable: true
  })
  async smartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSmartPoleArgs): Promise<SmartPole | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SmartPoleGroupBy], {
    nullable: false
  })
  async groupBySmartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySmartPoleArgs): Promise<SmartPoleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySmartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySmartPoleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SmartPole, {
    nullable: true
  })
  async updateOneSmartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSmartPoleArgs): Promise<SmartPole | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SmartPole, {
    nullable: false
  })
  async upsertOneSmartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSmartPoleArgs): Promise<SmartPole> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
