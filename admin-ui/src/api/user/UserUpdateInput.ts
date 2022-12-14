import { TestUpdateManyWithoutUsersInput } from "./TestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: Array<string>;
  tests?: TestUpdateManyWithoutUsersInput;
};
