import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";

export type TestUpdateInput = {
  user?: UserWhereUniqueInput;
  caseName?: string | null;
  grades?: GradeWhereUniqueInput;
};
