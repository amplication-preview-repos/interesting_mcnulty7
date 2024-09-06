import * as graphql from "@nestjs/graphql";
import { DeveloperAgentResolverBase } from "./base/developerAgent.resolver.base";
import { DeveloperAgent } from "./base/DeveloperAgent";
import { DeveloperAgentService } from "./developerAgent.service";

@graphql.Resolver(() => DeveloperAgent)
export class DeveloperAgentResolver extends DeveloperAgentResolverBase {
  constructor(protected readonly service: DeveloperAgentService) {
    super(service);
  }
}
