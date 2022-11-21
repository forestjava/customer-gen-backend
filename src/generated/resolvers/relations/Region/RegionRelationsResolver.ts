import * as TypeGraphQL from "type-graphql";
import { Company } from "../../../models/Company";
import { Formation } from "../../../models/Formation";
import { Region } from "../../../models/Region";
import { RegionFormationsArgs } from "./args/RegionFormationsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Region)
export class RegionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Formation], {
    nullable: false
  })
  async formations(@TypeGraphQL.Root() region: Region, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RegionFormationsArgs): Promise<Formation[]> {
    return getPrismaFromContext(ctx).region.findUnique({
      where: {
        id: region.id,
      },
    }).formations(args);
  }

  @TypeGraphQL.FieldResolver(_type => Company, {
    nullable: true
  })
  async company(@TypeGraphQL.Root() region: Region, @TypeGraphQL.Ctx() ctx: any): Promise<Company | null> {
    return getPrismaFromContext(ctx).region.findUnique({
      where: {
        id: region.id,
      },
    }).company({});
  }
}
