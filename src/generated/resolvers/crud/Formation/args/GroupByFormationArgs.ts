import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormationOrderByWithAggregationInput } from "../../../inputs/FormationOrderByWithAggregationInput";
import { FormationScalarWhereWithAggregatesInput } from "../../../inputs/FormationScalarWhereWithAggregatesInput";
import { FormationWhereInput } from "../../../inputs/FormationWhereInput";
import { FormationScalarFieldEnum } from "../../../../enums/FormationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFormationArgs {
  @TypeGraphQL.Field(_type => FormationWhereInput, {
    nullable: true
  })
  where?: FormationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FormationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FormationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "address" | "regionId">;

  @TypeGraphQL.Field(_type => FormationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FormationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
