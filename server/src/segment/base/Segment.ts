/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Annotation } from "../../annotation/base/Annotation";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsNumber,
  IsInt,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { Title } from "../../title/base/Title";
@ObjectType()
class Segment {
  @ApiProperty({
    required: false,
    type: () => Annotation,
  })
  @ValidateNested()
  @Type(() => Annotation)
  @IsOptional()
  annotation?: Annotation | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  duration!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  endSample!: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  fileAbsolutePath!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  filename!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  startSample!: number | null;

  @ApiProperty({
    required: false,
    type: () => Title,
  })
  @ValidateNested()
  @Type(() => Title)
  @IsOptional()
  title?: Title | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Segment };
