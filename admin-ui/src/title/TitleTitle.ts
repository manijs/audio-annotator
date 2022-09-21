import { Title as TTitle } from "../api/title/Title";

export const TITLE_TITLE_FIELD = "sourceFilename";

export const TitleTitle = (record: TTitle): string => {
  return record.sourceFilename || record.id;
};
