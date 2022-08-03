import { User } from "../user/User";
import { Grade } from "../grade/Grade";

export type Test = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User;
  caseName: string | null;
  grades?: Grade;
};
