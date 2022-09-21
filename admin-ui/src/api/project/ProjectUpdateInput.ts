import { TitleUpdateManyWithoutProjectsInput } from "./TitleUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  projectName?: string;
  titles?: TitleUpdateManyWithoutProjectsInput;
};
