import { CodeSnippetWhereUniqueInput } from "../codeSnippet/CodeSnippetWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SuggestionWhereInput = {
  codeSnippet?: CodeSnippetWhereUniqueInput;
  id?: StringFilter;
  relevance?: FloatNullableFilter;
  text?: StringNullableFilter;
};
