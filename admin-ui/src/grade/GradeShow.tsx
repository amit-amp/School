import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { TEST_TITLE_FIELD } from "../test/TestTitle";

export const GradeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Test" source="test.id" reference="Test">
          <TextField source={TEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
