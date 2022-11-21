import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAlertArgs } from "./args/AggregateAlertArgs";
import { Alert } from "../../../models/Alert";
import { AggregateAlert } from "../../outputs/AggregateAlert";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Alert)
export class AggregateAlertResolver {
  @TypeGraphQL.Query(_returns => AggregateAlert, {
    nullable: false
  })
  async aggregateAlert(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAlertArgs): Promise<AggregateAlert> {
    return getPrismaFromContext(ctx).alert.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
