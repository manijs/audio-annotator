import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { SegmentUpdateManyWithoutTitlesInput } from "./SegmentUpdateManyWithoutTitlesInput";

export type TitleUpdateInput = {
  project?: ProjectWhereUniqueInput | null;
  refTranscription?: string | null;
  sampleRate?: number | null;
  segments?: SegmentUpdateManyWithoutTitlesInput;
  sourceDuration?: number | null;
  sourceFilename?: string;
  sourceFilePath?: string;
  sourceFileSize?: number | null;
};
