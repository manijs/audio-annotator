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
import { AnnotationWhereUniqueInput } from "../../annotation/base/AnnotationWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  IsInt,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { TitleWhereUniqueInput } from "../../title/base/TitleWhereUniqueInput";
@InputType()
class SegmentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AnnotationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AnnotationWhereUniqueInput)
  @IsOptional()
  @Field(() => AnnotationWhereUniqueInput, {
    nullable: true,
  })
  annotation?: AnnotationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  duration?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  endSample?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fileAbsolutePath?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  filename?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  startSample?: number | null;

  @ApiProperty({
    required: false,
    type: () => TitleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TitleWhereUniqueInput)
  @IsOptional()
  @Field(() => TitleWhereUniqueInput, {
    nullable: true,
  })
  title?: TitleWhereUniqueInput | null;
}
export { SegmentUpdateInput };
