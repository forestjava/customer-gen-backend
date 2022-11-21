import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDeviceTypeArgs } from "./args/AggregateDeviceTypeArgs";
import { CreateManyDeviceTypeArgs } from "./args/CreateManyDeviceTypeArgs";
import { CreateOneDeviceTypeArgs } from "./args/CreateOneDeviceTypeArgs";
import { DeleteManyDeviceTypeArgs } from "./args/DeleteManyDeviceTypeArgs";
import { DeleteOneDeviceTypeArgs } from "./args/DeleteOneDeviceTypeArgs";
import { FindFirstDeviceTypeArgs } from "./args/FindFirstDeviceTypeArgs";
import { FindManyDeviceTypeArgs } from "./args/FindManyDeviceTypeArgs";
import { FindUniqueDeviceTypeArgs } from "./args/FindUniqueDeviceTypeArgs";
import { GroupByDeviceTypeArgs } from "./args/GroupByDeviceTypeArgs";
import { UpdateManyDeviceTypeArgs } from "./args/UpdateManyDeviceTypeArgs";
import { UpdateOneDeviceTypeArgs } from "./args/UpdateOneDeviceTypeArgs";
import { UpsertOneDeviceTypeArgs } from "./args/UpsertOneDeviceTypeArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { DeviceType } from "../../../models/DeviceType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDeviceType } from "../../outputs/AggregateDeviceType";
import { DeviceTypeGroupBy } from "../../outputs/DeviceTypeGroupBy";

@TypeGraphQL.Resolver(_of => DeviceType)
export class DeviceTypeCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateDeviceType, {
    nullable: false
  })
  async aggregateDeviceType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDeviceTypeArgs): Promise<AggregateDeviceType> {
    return getPrismaFromContext(ctx).deviceType.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyDeviceType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyDeviceTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deviceType.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DeviceType, {
    nullable: false
  })
  async createOneDeviceType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneDeviceTypeArgs): Promise<DeviceType> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deviceType.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDeviceType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyDeviceTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deviceType.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DeviceType, {
    nullable: true
  })
  async deleteOneDeviceType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneDeviceTypeArgs): Promise<DeviceType | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deviceType.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => DeviceType, {
    nullable: true
  })
  async findFirstDeviceType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDeviceTypeArgs): Promise<DeviceType | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deviceType.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [DeviceType], {
    nullable: false
  })
  async deviceTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyDeviceTypeArgs): Promise<DeviceType[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deviceType.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => DeviceType, {
    nullable: true
  })
  async deviceType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDeviceTypeArgs): Promise<DeviceType | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deviceType.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [DeviceTypeGroupBy], {
    nullable: false
  })
  async groupByDeviceType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDeviceTypeArgs): Promise<DeviceTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deviceType.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDeviceType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyDeviceTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deviceType.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DeviceType, {
    nullable: true
  })
  async updateOneDeviceType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneDeviceTypeArgs): Promise<DeviceType | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deviceType.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DeviceType, {
    nullable: false
  })
  async upsertOneDeviceType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneDeviceTypeArgs): Promise<DeviceType> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deviceType.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
