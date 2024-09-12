import { CodeSnippetWhereUniqueInput } from "../codeSnippet/CodeSnippetWhereUniqueInput";

export type SuggestionUpdateInput = {
  codeSnippet?: CodeSnippetWhereUniqueInput | null;
  relevance?: number | null;
  text?: string | null;
};
