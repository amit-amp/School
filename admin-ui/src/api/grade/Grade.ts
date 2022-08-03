import { Test } from "../test/Test";

export type Grade = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  test?: Test | null;
  value: number | null;
};
