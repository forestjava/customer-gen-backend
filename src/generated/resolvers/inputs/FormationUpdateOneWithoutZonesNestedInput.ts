import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormationCreateOrConnectWithoutZonesInput } from "../inputs/FormationCreateOrConnectWithoutZonesInput";
import { FormationCreateWithoutZonesInput } from "../inputs/FormationCreateWithoutZonesInput";
import { FormationUpdateWithoutZonesInput } from "../inputs/FormationUpdateWithoutZonesInput";
import { FormationUpsertWithoutZonesInput } from "../inputs/FormationUpsertWithoutZonesInput";
import { FormationWhereUniqueInput } from "../inputs/FormationWhereUniqueInput";

@TypeGraphQL.InputType("FormationUpdateOneWithoutZonesNestedInput", {
  isAbstract: true
})
export class FormationUpdateOneWithoutZonesNestedInput {
  @TypeGraphQL.Field(_type => FormationCreateWithoutZonesInput, {
    nullable: true
  })
  create?: FormationCreateWithoutZonesInput | undefined;

  @TypeGraphQL.Field(_type => FormationCreateOrConnectWithoutZonesInput, {
    nullable: true
  })
  connectOrCreate?: FormationCreateOrConnectWithoutZonesInput | undefined;

  @TypeGraphQL.Field(_type => FormationUpsertWithoutZonesInput, {
    nullable: true
  })
  upsert?: FormationUpsertWithoutZonesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => FormationWhereUniqueInput, {
    nullable: true
  })
  connect?: FormationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FormationUpdateWithoutZonesInput, {
    nullable: true
  })
  update?: FormationUpdateWithoutZonesInput | undefined;
}
