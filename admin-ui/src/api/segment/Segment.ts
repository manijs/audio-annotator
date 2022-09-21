import { Annotation } from "../annotation/Annotation";
import { Title } from "../title/Title";

export type Segment = {
  annotation?: Annotation | null;
  createdAt: Date;
  duration: number | null;
  endSample: number | null;
  fileAbsolutePath: string;
  filename: string;
  id: string;
  startSample: number | null;
  title?: Title | null;
  updatedAt: Date;
};
