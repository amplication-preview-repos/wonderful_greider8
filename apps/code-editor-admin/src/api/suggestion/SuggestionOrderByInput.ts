import { SortOrder } from "../../util/SortOrder";

export type SuggestionOrderByInput = {
  codeSnippetId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  relevance?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
