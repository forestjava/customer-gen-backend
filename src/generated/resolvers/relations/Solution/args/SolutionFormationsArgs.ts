import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormationOrderByWithRelationInput } from "../../../inputs/FormationOrderByWithRelationInput";
import { FormationWhereInput } from "../../../inputs/FormationWhereInput";
import { FormationWhereUniqueInput } from "../../../inputs/FormationWhereUniqueInput";
import { FormationScalarFieldEnum } from "../../../../enums/FormationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class SolutionFormationsArgs {
  @TypeGraphQL.Field(_type => FormationWhereInput, {
    nullable: true
  })
  where?: FormationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FormationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FormationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FormationWhereUniqueInput, {
    nullable: true
  })
  cursor?: FormationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [FormationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "address" | "regionId"> | undefined;
}
