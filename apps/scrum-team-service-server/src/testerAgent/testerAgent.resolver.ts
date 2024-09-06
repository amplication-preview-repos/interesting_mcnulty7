import * as graphql from "@nestjs/graphql";
import { TesterAgentResolverBase } from "./base/testerAgent.resolver.base";
import { TesterAgent } from "./base/TesterAgent";
import { TesterAgentService } from "./testerAgent.service";

@graphql.Resolver(() => TesterAgent)
export class TesterAgentResolver extends TesterAgentResolverBase {
  constructor(protected readonly service: TesterAgentService) {
    super(service);
  }
}
