import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeveloperAgentService } from "./developerAgent.service";
import { DeveloperAgentControllerBase } from "./base/developerAgent.controller.base";

@swagger.ApiTags("developerAgents")
@common.Controller("developerAgents")
export class DeveloperAgentController extends DeveloperAgentControllerBase {
  constructor(protected readonly service: DeveloperAgentService) {
    super(service);
  }
}
