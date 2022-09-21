/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TitleWhereInput } from "./TitleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TitleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TitleWhereInput,
  })
  @ValidateNested()
  @Type(() => TitleWhereInput)
  @IsOptional()
  @Field(() => TitleWhereInput, {
    nullable: true,
  })
  every?: TitleWhereInput;

  @ApiProperty({
    required: false,
    type: () => TitleWhereInput,
  })
  @ValidateNested()
  @Type(() => TitleWhereInput)
  @IsOptional()
  @Field(() => TitleWhereInput, {
    nullable: true,
  })
  some?: TitleWhereInput;

  @ApiProperty({
    required: false,
    type: () => TitleWhereInput,
  })
  @ValidateNested()
  @Type(() => TitleWhereInput)
  @IsOptional()
  @Field(() => TitleWhereInput, {
    nullable: true,
  })
  none?: TitleWhereInput;
}
export { TitleListRelationFilter };