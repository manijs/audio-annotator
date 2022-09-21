import { Annotation as TAnnotation } from "../api/annotation/Annotation";

export const ANNOTATION_TITLE_FIELD = "annotation";

export const AnnotationTitle = (record: TAnnotation): string => {
  return record.annotation || record.id;
};
