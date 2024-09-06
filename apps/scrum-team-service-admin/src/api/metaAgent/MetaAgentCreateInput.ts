import { InputJsonValue } from "../../types";

export type MetaAgentCreateInput = {
  capabilities?: InputJsonValue;
  description?: string | null;
  name?: string | null;
};
