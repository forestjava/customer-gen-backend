import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateZoneArgs } from "./args/AggregateZoneArgs";
import { Zone } from "../../../models/Zone";
import { AggregateZone } from "../../outputs/AggregateZone";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Zone)
export class AggregateZoneResolver {
  @TypeGraphQL.Query(_returns => AggregateZone, {
    nullable: false
  })
  async aggregateZone(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateZoneArgs): Promise<AggregateZone> {
    return getPrismaFromContext(ctx).zone.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
