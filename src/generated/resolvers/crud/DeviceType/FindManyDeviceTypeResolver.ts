import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyDeviceTypeArgs } from "./args/FindManyDeviceTypeArgs";
import { DeviceType } from "../../../models/DeviceType";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeviceType)
export class FindManyDeviceTypeResolver {
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
}
