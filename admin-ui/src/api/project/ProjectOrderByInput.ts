import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  projectName?: SortOrder;
  updatedAt?: SortOrder;
};
