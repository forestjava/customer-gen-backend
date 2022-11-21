import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFormationArgs } from "./args/AggregateFormationArgs";
import { Formation } from "../../../models/Formation";
import { AggregateFormation } from "../../outputs/AggregateFormation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Formation)
export class AggregateFormationResolver {
  @TypeGraphQL.Query(_returns => AggregateFormation, {
    nullable: false
  })
  async aggregateFormation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFormationArgs): Promise<AggregateFormation> {
    return getPrismaFromContext(ctx).formation.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
