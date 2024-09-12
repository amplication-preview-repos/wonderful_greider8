import { CodeSnippetWhereUniqueInput } from "../codeSnippet/CodeSnippetWhereUniqueInput";

export type CompletionCreateInput = {
  codeSnippet?: CodeSnippetWhereUniqueInput | null;
  confidenceScore?: number | null;
  text?: string | null;
};
