import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByDeviceTypeArgs } from "./args/GroupByDeviceTypeArgs";
import { DeviceType } from "../../../models/DeviceType";
import { DeviceTypeGroupBy } from "../../outputs/DeviceTypeGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeviceType)
export class GroupByDeviceTypeResolver {
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
}
