import { JsonValue } from "type-fest";

export type MetaAgent = {
  capabilities: JsonValue;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
