import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { SegmentWhereUniqueInput } from "../segment/SegmentWhereUniqueInput";

export type AnnotationWhereInput = {
  annotation?: StringNullableFilter;
  cleansedAnnotation?: StringNullableFilter;
  emotionalType?: StringNullableFilter;
  id?: StringFilter;
  isValid?: BooleanNullableFilter;
  segment?: SegmentWhereUniqueInput;
};
