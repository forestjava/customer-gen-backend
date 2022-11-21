import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneSmartPoleArgs } from "./args/CreateOneSmartPoleArgs";
import { SmartPole } from "../../../models/SmartPole";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SmartPole)
export class CreateOneSmartPoleResolver {
  @TypeGraphQL.Mutation(_returns => SmartPole, {
    nullable: false
  })
  async createOneSmartPole(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSmartPoleArgs): Promise<SmartPole> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).smartPole.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
