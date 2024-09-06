import { TesterAgentWhereInput } from "./TesterAgentWhereInput";
import { TesterAgentOrderByInput } from "./TesterAgentOrderByInput";

export type TesterAgentFindManyArgs = {
  where?: TesterAgentWhereInput;
  orderBy?: Array<TesterAgentOrderByInput>;
  skip?: number;
  take?: number;
};
