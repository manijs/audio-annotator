import { SegmentWhereUniqueInput } from "../segment/SegmentWhereUniqueInput";

export type AnnotationUpdateInput = {
  annotation?: string | null;
  cleansedAnnotation?: string | null;
  emotionalType?: string | null;
  isValid?: boolean | null;
  segment?: SegmentWhereUniqueInput | null;
};
