import * as TypeGraphQL from "type-graphql";
import { Formation } from "../../../models/Formation";
import { Region } from "../../../models/Region";
import { Solution } from "../../../models/Solution";
import { Zone } from "../../../models/Zone";
import { FormationSolutionsArgs } from "./args/FormationSolutionsArgs";
import { FormationZonesArgs } from "./args/FormationZonesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Formation)
export class FormationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Solution], {
    nullable: false
  })
  async solutions(@TypeGraphQL.Root() formation: Formation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FormationSolutionsArgs): Promise<Solution[]> {
    return getPrismaFromContext(ctx).formation.findUnique({
      where: {
        id: formation.id,
      },
    }).solutions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Zone], {
    nullable: false
  })
  async zones(@TypeGraphQL.Root() formation: Formation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FormationZonesArgs): Promise<Zone[]> {
    return getPrismaFromContext(ctx).formation.findUnique({
      where: {
        id: formation.id,
      },
    }).zones(args);
  }

  @TypeGraphQL.FieldResolver(_type => Region, {
    nullable: true
  })
  async region(@TypeGraphQL.Root() formation: Formation, @TypeGraphQL.Ctx() ctx: any): Promise<Region | null> {
    return getPrismaFromContext(ctx).formation.findUnique({
      where: {
        id: formation.id,
      },
    }).region({});
  }
}
