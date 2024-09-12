import { CompletionUpdateManyWithoutCodeSnippetsInput } from "./CompletionUpdateManyWithoutCodeSnippetsInput";
import { SuggestionUpdateManyWithoutCodeSnippetsInput } from "./SuggestionUpdateManyWithoutCodeSnippetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CodeSnippetUpdateInput = {
  code?: string | null;
  completions?: CompletionUpdateManyWithoutCodeSnippetsInput;
  language?: string | null;
  suggestions?: SuggestionUpdateManyWithoutCodeSnippetsInput;
  user?: UserWhereUniqueInput | null;
};
