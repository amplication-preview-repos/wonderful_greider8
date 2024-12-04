import { CodeSnippet } from "../codeSnippet/CodeSnippet";

export type Completion = {
  codeSnippet?: CodeSnippet | null;
  confidenceScore: number | null;
  createdAt: Date;
  id: string;
  text: string | null;
  updatedAt: Date;
};
