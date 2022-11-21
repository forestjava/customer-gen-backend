import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SolutionCreateOrConnectWithoutFormationsInput } from "../inputs/SolutionCreateOrConnectWithoutFormationsInput";
import { SolutionCreateWithoutFormationsInput } from "../inputs/SolutionCreateWithoutFormationsInput";
import { SolutionWhereUniqueInput } from "../inputs/SolutionWhereUniqueInput";

@TypeGraphQL.InputType("SolutionCreateNestedManyWithoutFormationsInput", {
  isAbstract: true
})
export class SolutionCreateNestedManyWithoutFormationsInput {
  @TypeGraphQL.Field(_type => [SolutionCreateWithoutFormationsInput], {
    nullable: true
  })
  create?: SolutionCreateWithoutFormationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionCreateOrConnectWithoutFormationsInput], {
    nullable: true
  })
  connectOrCreate?: SolutionCreateOrConnectWithoutFormationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SolutionWhereUniqueInput], {
    nullable: true
  })
  connect?: SolutionWhereUniqueInput[] | undefined;
}
