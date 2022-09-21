import { AnnotationWhereUniqueInput } from "../annotation/AnnotationWhereUniqueInput";
import { TitleWhereUniqueInput } from "../title/TitleWhereUniqueInput";

export type SegmentCreateInput = {
  annotation?: AnnotationWhereUniqueInput | null;
  duration?: number | null;
  endSample?: number | null;
  fileAbsolutePath: string;
  filename: string;
  startSample?: number | null;
  title?: TitleWhereUniqueInput | null;
};
