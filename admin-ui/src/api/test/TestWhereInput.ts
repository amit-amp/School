import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";

export type TestWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  caseName?: StringNullableFilter;
  grades?: GradeWhereUniqueInput;
};
