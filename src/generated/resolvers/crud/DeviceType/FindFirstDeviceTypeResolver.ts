import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstDeviceTypeArgs } from "./args/FindFirstDeviceTypeArgs";
import { DeviceType } from "../../../models/DeviceType";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeviceType)
export class FindFirstDeviceTypeResolver {
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
}
