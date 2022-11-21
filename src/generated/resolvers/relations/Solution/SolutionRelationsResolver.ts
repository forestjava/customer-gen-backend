import * as TypeGraphQL from "type-graphql";
import { Formation } from "../../../models/Formation";
import { Solution } from "../../../models/Solution";
import { SolutionFormationsArgs } from "./args/SolutionFormationsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Solution)
export class SolutionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Formation], {
    nullable: false
  })
  async formations(@TypeGraphQL.Root() solution: Solution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SolutionFormationsArgs): Promise<Formation[]> {
    return getPrismaFromContext(ctx).solution.findUnique({
      where: {
        id: solution.id,
      },
    }).formations(args);
  }
}
