import { ProductOwnerAgent as TProductOwnerAgent } from "../api/productOwnerAgent/ProductOwnerAgent";

export const PRODUCTOWNERAGENT_TITLE_FIELD = "id";

export const ProductOwnerAgentTitle = (record: TProductOwnerAgent): string => {
  return record.id?.toString() || String(record.id);
};
