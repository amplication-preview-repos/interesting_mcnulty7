import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScrumMasterAgentService } from "./scrumMasterAgent.service";
import { ScrumMasterAgentControllerBase } from "./base/scrumMasterAgent.controller.base";

@swagger.ApiTags("scrumMasterAgents")
@common.Controller("scrumMasterAgents")
export class ScrumMasterAgentController extends ScrumMasterAgentControllerBase {
  constructor(protected readonly service: ScrumMasterAgentService) {
    super(service);
  }
}
