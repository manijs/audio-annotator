import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TitleWhereInput = {
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  sourceFilename?: StringFilter;
};
