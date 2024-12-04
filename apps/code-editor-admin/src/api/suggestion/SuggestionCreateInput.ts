import { CodeSnippetWhereUniqueInput } from "../codeSnippet/CodeSnippetWhereUniqueInput";

export type SuggestionCreateInput = {
  codeSnippet?: CodeSnippetWhereUniqueInput | null;
  relevance?: number | null;
  text?: string | null;
};
