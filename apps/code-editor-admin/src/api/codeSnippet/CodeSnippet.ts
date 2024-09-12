import { Completion } from "../completion/Completion";
import { Suggestion } from "../suggestion/Suggestion";
import { User } from "../user/User";

export type CodeSnippet = {
  code: string | null;
  completions?: Array<Completion>;
  createdAt: Date;
  id: string;
  language: string | null;
  suggestions?: Array<Suggestion>;
  updatedAt: Date;
  user?: User | null;
};
