import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";

export type TestCreateInput = {
  user: UserWhereUniqueInput;
  caseName?: string | null;
  grades: GradeWhereUniqueInput;
};
