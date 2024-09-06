import * as graphql from "@nestjs/graphql";
import { ScrumMasterAgentResolverBase } from "./base/scrumMasterAgent.resolver.base";
import { ScrumMasterAgent } from "./base/ScrumMasterAgent";
import { ScrumMasterAgentService } from "./scrumMasterAgent.service";

@graphql.Resolver(() => ScrumMasterAgent)
export class ScrumMasterAgentResolver extends ScrumMasterAgentResolverBase {
  constructor(protected readonly service: ScrumMasterAgentService) {
    super(service);
  }
}
