import { ProductOwnerAgentWhereInput } from "./ProductOwnerAgentWhereInput";
import { ProductOwnerAgentOrderByInput } from "./ProductOwnerAgentOrderByInput";

export type ProductOwnerAgentFindManyArgs = {
  where?: ProductOwnerAgentWhereInput;
  orderBy?: Array<ProductOwnerAgentOrderByInput>;
  skip?: number;
  take?: number;
};
