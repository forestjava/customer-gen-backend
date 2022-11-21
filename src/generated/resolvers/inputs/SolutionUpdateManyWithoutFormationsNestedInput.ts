import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SolutionCreateOrConnectWithoutFormationsInput } from "../inputs/SolutionCreateOrConnectWithoutFormationsInput";
import { SolutionCreateWithoutFormationsInput } from "../inputs/SolutionCreateWithoutFormationsInput";
import { SolutionScalarWhereInput } from "../inputs/SolutionScalarWhereInput";
import { SolutionUpdateManyWithWhereWithoutFormationsInput } from "../inputs/SolutionUpdateManyWithWhereWithoutFormationsInput";
import { SolutionUpdateWithWhereUniqueWithoutFormationsInput } from "../inputs/SolutionUpdateWithWhereUniqueWithoutFormationsInput";
import { SolutionUpsertWithWhereUniqueWithoutFormationsInput } from "../inputs/SolutionUpsertWithWhereUniqueWithoutFormationsInput";
import { SolutionWhereUniqueInput } from "../inputs/SolutionWhereUniqueInput";

@TypeGraphQL.InputType("SolutionUpdateManyWithoutFormationsNestedInput", {
  isAbstract: true
})
export class SolutionUpdateManyWithoutFormationsNestedInput {
  @TypeGraphQL.Field(_type => [SolutionCreateWithoutFormationsInput], {
    nullable: true
  })
  create?: SolutionCreateWithoutFormationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionCreateOrConnectWithoutFormationsInput], {
    nullable: true
  })
  connectOrCreate?: SolutionCreateOrConnectWithoutFormationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionUpsertWithWhereUniqueWithoutFormationsInput], {
    nullable: true
  })
  upsert?: SolutionUpsertWithWhereUniqueWithoutFormationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionWhereUniqueInput], {
    nullable: true
  })
  set?: SolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionWhereUniqueInput], {
    nullable: true
  })
  delete?: SolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: SolutionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionUpdateWithWhereUniqueWithoutFormationsInput], {
    nullable: true
  })
  update?: SolutionUpdateWithWhereUniqueWithoutFormationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionUpdateManyWithWhereWithoutFormationsInput], {
    nullable: true
  })
  updateMany?: SolutionUpdateManyWithWhereWithoutFormationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SolutionScalarWhereInput[] | undefined;
}
