import { Test } from "../test/Test";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: Array<string>;
  tests?: Array<Test>;
};
