import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDeviceTypeArgs } from "./args/AggregateDeviceTypeArgs";
import { DeviceType } from "../../../models/DeviceType";
import { AggregateDeviceType } from "../../outputs/AggregateDeviceType";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => DeviceType)
export class AggregateDeviceTypeResolver {
  @TypeGraphQL.Query(_returns => AggregateDeviceType, {
    nullable: false
  })
  async aggregateDeviceType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDeviceTypeArgs): Promise<AggregateDeviceType> {
    return getPrismaFromContext(ctx).deviceType.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
