import { SortOrder } from "../../util/SortOrder";

export type SegmentOrderByInput = {
  annotationId?: SortOrder;
  createdAt?: SortOrder;
  duration?: SortOrder;
  endSample?: SortOrder;
  fileAbsolutePath?: SortOrder;
  filename?: SortOrder;
  id?: SortOrder;
  startSample?: SortOrder;
  titleId?: SortOrder;
  updatedAt?: SortOrder;
};
