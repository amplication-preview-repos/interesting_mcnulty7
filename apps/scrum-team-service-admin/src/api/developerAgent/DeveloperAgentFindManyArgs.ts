import { DeveloperAgentWhereInput } from "./DeveloperAgentWhereInput";
import { DeveloperAgentOrderByInput } from "./DeveloperAgentOrderByInput";

export type DeveloperAgentFindManyArgs = {
  where?: DeveloperAgentWhereInput;
  orderBy?: Array<DeveloperAgentOrderByInput>;
  skip?: number;
  take?: number;
};
