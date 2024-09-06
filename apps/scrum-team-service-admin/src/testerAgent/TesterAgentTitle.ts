import { TesterAgent as TTesterAgent } from "../api/testerAgent/TesterAgent";

export const TESTERAGENT_TITLE_FIELD = "id";

export const TesterAgentTitle = (record: TTesterAgent): string => {
  return record.id?.toString() || String(record.id);
};
