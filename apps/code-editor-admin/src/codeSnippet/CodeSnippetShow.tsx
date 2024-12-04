import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CODESNIPPET_TITLE_FIELD } from "./CodeSnippetTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CodeSnippetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="language" source="language" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Completion"
          target="codeSnippetId"
          label="Completions"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Suggestion"
          target="codeSnippetId"
          label="Suggestions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CodeSnippet"
              source="codesnippet.id"
              reference="CodeSnippet"
            >
              <TextField source={CODESNIPPET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="relevance" source="relevance" />
            <TextField label="text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
