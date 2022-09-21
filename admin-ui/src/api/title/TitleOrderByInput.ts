import { SortOrder } from "../../util/SortOrder";

export type TitleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  refTranscription?: SortOrder;
  sampleRate?: SortOrder;
  sourceDuration?: SortOrder;
  sourceFilename?: SortOrder;
  sourceFilePath?: SortOrder;
  sourceFileSize?: SortOrder;
  updatedAt?: SortOrder;
};
