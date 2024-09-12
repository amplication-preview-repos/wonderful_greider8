import { CompletionCreateNestedManyWithoutCodeSnippetsInput } from "./CompletionCreateNestedManyWithoutCodeSnippetsInput";
import { SuggestionCreateNestedManyWithoutCodeSnippetsInput } from "./SuggestionCreateNestedManyWithoutCodeSnippetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CodeSnippetCreateInput = {
  code?: string | null;
  completions?: CompletionCreateNestedManyWithoutCodeSnippetsInput;
  language?: string | null;
  suggestions?: SuggestionCreateNestedManyWithoutCodeSnippetsInput;
  user?: UserWhereUniqueInput | null;
};
