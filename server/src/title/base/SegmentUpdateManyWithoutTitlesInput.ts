/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SegmentWhereUniqueInput } from "../../segment/base/SegmentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class SegmentUpdateManyWithoutTitlesInput {
  @Field(() => [SegmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SegmentWhereUniqueInput],
  })
  connect?: Array<SegmentWhereUniqueInput>;

  @Field(() => [SegmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SegmentWhereUniqueInput],
  })
  disconnect?: Array<SegmentWhereUniqueInput>;

  @Field(() => [SegmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SegmentWhereUniqueInput],
  })
  set?: Array<SegmentWhereUniqueInput>;
}
export { SegmentUpdateManyWithoutTitlesInput };
