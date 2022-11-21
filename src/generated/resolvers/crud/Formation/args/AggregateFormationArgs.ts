import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormationOrderByWithRelationInput } from "../../../inputs/FormationOrderByWithRelationInput";
import { FormationWhereInput } from "../../../inputs/FormationWhereInput";
import { FormationWhereUniqueInput } from "../../../inputs/FormationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFormationArgs {
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
}
