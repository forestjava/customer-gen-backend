import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSmartPoleArgs } from "./args/DeleteOneSmartPoleArgs";
import { SmartPole } from "../../../models/SmartPole";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SmartPole)
export class DeleteOneSmartPoleResolver {
  @TypeGraphQL.Mutation(_returns => SmartPole, {
    nullable: true
  })
  async deleteOneSmartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSmartPoleArgs): Promise<SmartPole | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
