import { CodeSnippet } from "../codeSnippet/CodeSnippet";
import { JsonValue } from "type-fest";

export type User = {
  codeSnippets?: Array<CodeSnippet>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
