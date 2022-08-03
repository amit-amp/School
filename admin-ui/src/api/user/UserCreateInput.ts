import { TestCreateNestedManyWithoutUsersInput } from "./TestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: Array<string>;
  tests?: TestCreateNestedManyWithoutUsersInput;
};
