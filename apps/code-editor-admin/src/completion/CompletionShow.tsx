import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CODESNIPPET_TITLE_FIELD } from "../codeSnippet/CodeSnippetTitle";

export const CompletionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="CodeSnippet"
          source="codesnippet.id"
          reference="CodeSnippet"
        >
          <TextField source={CODESNIPPET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="confidenceScore" source="confidenceScore" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
