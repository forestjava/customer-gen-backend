import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDeviceArgs } from "./args/AggregateDeviceArgs";
import { Device } from "../../../models/Device";
import { AggregateDevice } from "../../outputs/AggregateDevice";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Device)
export class AggregateDeviceResolver {
  @TypeGraphQL.Query(_returns => AggregateDevice, {
    nullable: false
  })
  async aggregateDevice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDeviceArgs): Promise<AggregateDevice> {
    return getPrismaFromContext(ctx).device.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
