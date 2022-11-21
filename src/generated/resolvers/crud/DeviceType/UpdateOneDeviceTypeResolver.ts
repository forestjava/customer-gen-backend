import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneDeviceTypeArgs } from "./args/UpdateOneDeviceTypeArgs";
import { DeviceType } from "../../../models/DeviceType";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeviceType)
export class UpdateOneDeviceTypeResolver {
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
}
