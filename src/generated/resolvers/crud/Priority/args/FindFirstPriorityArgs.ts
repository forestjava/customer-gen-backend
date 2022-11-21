import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PriorityOrderByWithRelationInput } from "../../../inputs/PriorityOrderByWithRelationInput";
import { PriorityWhereInput } from "../../../inputs/PriorityWhereInput";
import { PriorityWhereUniqueInput } from "../../../inputs/PriorityWhereUniqueInput";
import { PriorityScalarFieldEnum } from "../../../../enums/PriorityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPriorityArgs {
  @TypeGraphQL.Field(_type => PriorityWhereInput, {
    nullable: true
  })
  where?: PriorityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PriorityOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PriorityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PriorityWhereUniqueInput, {
    nullable: true
  })
  cursor?: PriorityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PriorityScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
