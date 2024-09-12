import { CodeSnippet as TCodeSnippet } from "../api/codeSnippet/CodeSnippet";

export const CODESNIPPET_TITLE_FIELD = "language";

export const CodeSnippetTitle = (record: TCodeSnippet): string => {
  return record.language?.toString() || String(record.id);
};
