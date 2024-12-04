import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CODESNIPPET_TITLE_FIELD } from "../codeSnippet/CodeSnippetTitle";

export const CompletionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Completions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
