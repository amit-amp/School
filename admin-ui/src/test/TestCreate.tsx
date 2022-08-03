import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { GradeTitle } from "../grade/GradeTitle";

export const TestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Case Name" source="caseName" />
        <ReferenceInput source="grade.id" reference="Grade" label="Grades">
          <SelectInput optionText={GradeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
