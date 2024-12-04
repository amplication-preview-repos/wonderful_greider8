import { CodeSnippetWhereUniqueInput } from "../codeSnippet/CodeSnippetWhereUniqueInput";

export type CompletionUpdateInput = {
  codeSnippet?: CodeSnippetWhereUniqueInput | null;
  confidenceScore?: number | null;
  text?: string | null;
};
