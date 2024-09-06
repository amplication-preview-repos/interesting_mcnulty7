import { MetaAgentWhereInput } from "./MetaAgentWhereInput";
import { MetaAgentOrderByInput } from "./MetaAgentOrderByInput";

export type MetaAgentFindManyArgs = {
  where?: MetaAgentWhereInput;
  orderBy?: Array<MetaAgentOrderByInput>;
  skip?: number;
  take?: number;
};
