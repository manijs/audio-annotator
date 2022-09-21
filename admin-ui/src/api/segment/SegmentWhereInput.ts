import { AnnotationWhereUniqueInput } from "../annotation/AnnotationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TitleWhereUniqueInput } from "../title/TitleWhereUniqueInput";

export type SegmentWhereInput = {
  annotation?: AnnotationWhereUniqueInput;
  id?: StringFilter;
  title?: TitleWhereUniqueInput;
};
