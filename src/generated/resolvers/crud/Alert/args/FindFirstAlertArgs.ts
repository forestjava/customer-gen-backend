import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlertOrderByWithRelationInput } from "../../../inputs/AlertOrderByWithRelationInput";
import { AlertWhereInput } from "../../../inputs/AlertWhereInput";
import { AlertWhereUniqueInput } from "../../../inputs/AlertWhereUniqueInput";
import { AlertScalarFieldEnum } from "../../../../enums/AlertScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAlertArgs {
  @TypeGraphQL.Field(_type => AlertWhereInput, {
    nullable: true
  })
  where?: AlertWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AlertOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AlertOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AlertWhereUniqueInput, {
    nullable: true
  })
  cursor?: AlertWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AlertScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "priorityId" | "deviceId" | "message"> | undefined;
}
