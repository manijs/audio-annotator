import { Project } from "../project/Project";
import { Segment } from "../segment/Segment";

export type Title = {
  createdAt: Date;
  id: string;
  project?: Project | null;
  refTranscription: string | null;
  sampleRate: number | null;
  segments?: Array<Segment>;
  sourceDuration: number | null;
  sourceFilename: string;
  sourceFilePath: string;
  sourceFileSize: number | null;
  updatedAt: Date;
};
