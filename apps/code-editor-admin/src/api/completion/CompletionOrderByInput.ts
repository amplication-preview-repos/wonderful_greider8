import { SortOrder } from "../../util/SortOrder";

export type CompletionOrderByInput = {
  codeSnippetId?: SortOrder;
  confidenceScore?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
