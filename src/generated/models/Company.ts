import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Region } from "../models/Region";
import { CompanyCount } from "../resolvers/outputs/CompanyCount";

@TypeGraphQL.ObjectType("Company", {
  isAbstract: true
})
export class Company {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  logo?: string | null;

  regions?: Region[];

  @TypeGraphQL.Field(_type => CompanyCount, {
    nullable: true
  })
  _count?: CompanyCount | null;
}
