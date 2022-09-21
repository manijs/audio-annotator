import { TitleWhereInput } from "./TitleWhereInput";
import { TitleOrderByInput } from "./TitleOrderByInput";

export type TitleFindManyArgs = {
  where?: TitleWhereInput;
  orderBy?: Array<TitleOrderByInput>;
  skip?: number;
  take?: number;
};
