import { MetaAgent as TMetaAgent } from "../api/metaAgent/MetaAgent";

export const METAAGENT_TITLE_FIELD = "name";

export const MetaAgentTitle = (record: TMetaAgent): string => {
  return record.name?.toString() || String(record.id);
};
