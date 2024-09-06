import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MetaAgentService } from "./metaAgent.service";
import { MetaAgentControllerBase } from "./base/metaAgent.controller.base";

@swagger.ApiTags("metaAgents")
@common.Controller("metaAgents")
export class MetaAgentController extends MetaAgentControllerBase {
  constructor(protected readonly service: MetaAgentService) {
    super(service);
  }
}
