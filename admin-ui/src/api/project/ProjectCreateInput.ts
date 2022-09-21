import { TitleCreateNestedManyWithoutProjectsInput } from "./TitleCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  projectName: string;
  titles?: TitleCreateNestedManyWithoutProjectsInput;
};
