import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CodeSnippetTitle } from "../codeSnippet/CodeSnippetTitle";

export const SuggestionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="codeSnippet.id"
          reference="CodeSnippet"
          label="CodeSnippet"
        >
          <SelectInput optionText={CodeSnippetTitle} />
        </ReferenceInput>
        <NumberInput label="relevance" source="relevance" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
