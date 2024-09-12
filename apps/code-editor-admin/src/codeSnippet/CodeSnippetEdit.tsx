import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CompletionTitle } from "../completion/CompletionTitle";
import { SuggestionTitle } from "../suggestion/SuggestionTitle";
import { UserTitle } from "../user/UserTitle";

export const CodeSnippetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" multiline source="code" />
        <ReferenceArrayInput
          source="completions"
          reference="Completion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompletionTitle} />
        </ReferenceArrayInput>
        <TextInput label="language" source="language" />
        <ReferenceArrayInput
          source="suggestions"
          reference="Suggestion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SuggestionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
