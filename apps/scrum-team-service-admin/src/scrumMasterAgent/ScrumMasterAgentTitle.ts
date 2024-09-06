import { ScrumMasterAgent as TScrumMasterAgent } from "../api/scrumMasterAgent/ScrumMasterAgent";

export const SCRUMMASTERAGENT_TITLE_FIELD = "id";

export const ScrumMasterAgentTitle = (record: TScrumMasterAgent): string => {
  return record.id?.toString() || String(record.id);
};
