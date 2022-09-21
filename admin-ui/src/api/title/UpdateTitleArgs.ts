import { TitleWhereUniqueInput } from "./TitleWhereUniqueInput";
import { TitleUpdateInput } from "./TitleUpdateInput";

export type UpdateTitleArgs = {
  where: TitleWhereUniqueInput;
  data: TitleUpdateInput;
};
