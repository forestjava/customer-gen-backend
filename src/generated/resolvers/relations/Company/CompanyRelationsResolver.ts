import * as TypeGraphQL from "type-graphql";
import { Company } from "../../../models/Company";
import { Region } from "../../../models/Region";
import { CompanyRegionsArgs } from "./args/CompanyRegionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Company)
export class CompanyRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Region], {
    nullable: false
  })
  async regions(@TypeGraphQL.Root() company: Company, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CompanyRegionsArgs): Promise<Region[]> {
    return getPrismaFromContext(ctx).company.findUnique({
      where: {
        id: company.id,
      },
    }).regions(args);
  }
}
