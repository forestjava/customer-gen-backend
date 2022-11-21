import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSmartPoleArgs } from "./args/FindUniqueSmartPoleArgs";
import { SmartPole } from "../../../models/SmartPole";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SmartPole)
export class FindUniqueSmartPoleResolver {
  @TypeGraphQL.Query(_returns => SmartPole, {
    nullable: true
  })
  async smartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSmartPoleArgs): Promise<SmartPole | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
