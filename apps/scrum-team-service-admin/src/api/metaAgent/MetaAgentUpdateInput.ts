import { InputJsonValue } from "../../types";

export type MetaAgentUpdateInput = {
  capabilities?: InputJsonValue;
  description?: string | null;
  name?: string | null;
};
