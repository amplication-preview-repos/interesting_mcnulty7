import { DeveloperAgent as TDeveloperAgent } from "../api/developerAgent/DeveloperAgent";

export const DEVELOPERAGENT_TITLE_FIELD = "id";

export const DeveloperAgentTitle = (record: TDeveloperAgent): string => {
  return record.id?.toString() || String(record.id);
};
