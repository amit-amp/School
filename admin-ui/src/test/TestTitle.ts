import { Test as TTest } from "../api/test/Test";

export const TEST_TITLE_FIELD = "caseName";

export const TestTitle = (record: TTest): string => {
  return record.caseName || record.id;
};
