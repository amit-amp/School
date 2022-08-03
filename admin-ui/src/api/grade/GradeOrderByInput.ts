import { SortOrder } from "../../util/SortOrder";

export type GradeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  testId?: SortOrder;
  value?: SortOrder;
};
