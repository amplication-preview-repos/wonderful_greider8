import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { CodeSnippetTitle } from "../codeSnippet/CodeSnippetTitle";

export const SuggestionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
