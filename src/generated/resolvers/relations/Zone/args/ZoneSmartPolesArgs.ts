import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SmartPoleOrderByWithRelationInput } from "../../../inputs/SmartPoleOrderByWithRelationInput";
import { SmartPoleWhereInput } from "../../../inputs/SmartPoleWhereInput";
import { SmartPoleWhereUniqueInput } from "../../../inputs/SmartPoleWhereUniqueInput";
import { SmartPoleScalarFieldEnum } from "../../../../enums/SmartPoleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ZoneSmartPolesArgs {
  @TypeGraphQL.Field(_type => SmartPoleWhereInput, {
    nullable: true
  })
  where?: SmartPoleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SmartPoleOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SmartPoleWhereUniqueInput, {
    nullable: true
  })
  cursor?: SmartPoleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SmartPoleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "connectLocationId" | "connectDeviceId" | "name" | "serial" | "latitude" | "longitude" | "zoneId"> | undefined;
}
