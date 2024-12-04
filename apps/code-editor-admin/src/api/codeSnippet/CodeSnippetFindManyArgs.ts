import { CodeSnippetWhereInput } from "./CodeSnippetWhereInput";
import { CodeSnippetOrderByInput } from "./CodeSnippetOrderByInput";

export type CodeSnippetFindManyArgs = {
  where?: CodeSnippetWhereInput;
  orderBy?: Array<CodeSnippetOrderByInput>;
  skip?: number;
  take?: number;
};
