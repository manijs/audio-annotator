import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { SegmentCreateNestedManyWithoutTitlesInput } from "./SegmentCreateNestedManyWithoutTitlesInput";

export type TitleCreateInput = {
  project?: ProjectWhereUniqueInput | null;
  refTranscription?: string | null;
  sampleRate?: number | null;
  segments?: SegmentCreateNestedManyWithoutTitlesInput;
  sourceDuration?: number | null;
  sourceFilename: string;
  sourceFilePath: string;
  sourceFileSize?: number | null;
};
