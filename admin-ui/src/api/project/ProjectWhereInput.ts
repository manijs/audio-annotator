import { StringFilter } from "../../util/StringFilter";
import { TitleListRelationFilter } from "../title/TitleListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  projectName?: StringFilter;
  titles?: TitleListRelationFilter;
};
