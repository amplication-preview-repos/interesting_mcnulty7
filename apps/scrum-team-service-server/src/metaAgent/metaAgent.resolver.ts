import * as graphql from "@nestjs/graphql";
import { MetaAgentResolverBase } from "./base/metaAgent.resolver.base";
import { MetaAgent } from "./base/MetaAgent";
import { MetaAgentService } from "./metaAgent.service";

@graphql.Resolver(() => MetaAgent)
export class MetaAgentResolver extends MetaAgentResolverBase {
  constructor(protected readonly service: MetaAgentService) {
    super(service);
  }
}
