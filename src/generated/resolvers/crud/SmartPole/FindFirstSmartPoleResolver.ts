import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstSmartPoleArgs } from "./args/FindFirstSmartPoleArgs";
import { SmartPole } from "../../../models/SmartPole";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SmartPole)
export class FindFirstSmartPoleResolver {
  @TypeGraphQL.Query(_returns => SmartPole, {
    nullable: true
  })
  async findFirstSmartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSmartPoleArgs): Promise<SmartPole | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
