import { SortOrder } from "../../util/SortOrder";

export type AnnotationOrderByInput = {
  annotation?: SortOrder;
  cleansedAnnotation?: SortOrder;
  createdAt?: SortOrder;
  emotionalType?: SortOrder;
  id?: SortOrder;
  isValid?: SortOrder;
  segmentId?: SortOrder;
  updatedAt?: SortOrder;
};
