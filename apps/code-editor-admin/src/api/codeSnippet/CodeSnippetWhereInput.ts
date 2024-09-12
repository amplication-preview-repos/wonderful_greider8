import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompletionListRelationFilter } from "../completion/CompletionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SuggestionListRelationFilter } from "../suggestion/SuggestionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CodeSnippetWhereInput = {
  code?: StringNullableFilter;
  completions?: CompletionListRelationFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  suggestions?: SuggestionListRelationFilter;
  user?: UserWhereUniqueInput;
};
