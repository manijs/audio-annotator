import { Segment } from "../segment/Segment";

export type Annotation = {
  annotation: string | null;
  cleansedAnnotation: string | null;
  createdAt: Date;
  emotionalType: string | null;
  id: string;
  isValid: boolean | null;
  segment?: Segment | null;
  updatedAt: Date;
};
