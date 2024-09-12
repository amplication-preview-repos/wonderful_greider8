import { CodeSnippet } from "../codeSnippet/CodeSnippet";

export type Suggestion = {
  codeSnippet?: CodeSnippet | null;
  createdAt: Date;
  id: string;
  relevance: number | null;
  text: string | null;
  updatedAt: Date;
};
