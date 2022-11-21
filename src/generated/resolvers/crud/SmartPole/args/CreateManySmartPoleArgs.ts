import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SmartPoleCreateManyInput } from "../../../inputs/SmartPoleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySmartPoleArgs {
  @TypeGraphQL.Field(_type => [SmartPoleCreateManyInput], {
    nullable: false
  })
  data!: SmartPoleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
