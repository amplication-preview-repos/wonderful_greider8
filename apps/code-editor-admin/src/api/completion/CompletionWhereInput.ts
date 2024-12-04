import { CodeSnippetWhereUniqueInput } from "../codeSnippet/CodeSnippetWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CompletionWhereInput = {
  codeSnippet?: CodeSnippetWhereUniqueInput;
  confidenceScore?: FloatNullableFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
};
