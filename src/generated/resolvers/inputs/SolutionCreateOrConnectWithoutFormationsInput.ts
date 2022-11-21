import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SolutionCreateWithoutFormationsInput } from "../inputs/SolutionCreateWithoutFormationsInput";
import { SolutionWhereUniqueInput } from "../inputs/SolutionWhereUniqueInput";

@TypeGraphQL.InputType("SolutionCreateOrConnectWithoutFormationsInput", {
  isAbstract: true
})
export class SolutionCreateOrConnectWithoutFormationsInput {
  @TypeGraphQL.Field(_type => SolutionWhereUniqueInput, {
    nullable: false
  })
  where!: SolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SolutionCreateWithoutFormationsInput, {
    nullable: false
  })
  create!: SolutionCreateWithoutFormationsInput;
}
