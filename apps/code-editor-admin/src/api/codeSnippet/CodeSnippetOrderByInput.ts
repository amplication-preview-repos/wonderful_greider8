import { SortOrder } from "../../util/SortOrder";

export type CodeSnippetOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
