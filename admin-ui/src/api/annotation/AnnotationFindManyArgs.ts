import { AnnotationWhereInput } from "./AnnotationWhereInput";
import { AnnotationOrderByInput } from "./AnnotationOrderByInput";

export type AnnotationFindManyArgs = {
  where?: AnnotationWhereInput;
  orderBy?: Array<AnnotationOrderByInput>;
  skip?: number;
  take?: number;
};
