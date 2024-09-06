import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TesterAgentService } from "./testerAgent.service";
import { TesterAgentControllerBase } from "./base/testerAgent.controller.base";

@swagger.ApiTags("testerAgents")
@common.Controller("testerAgents")
export class TesterAgentController extends TesterAgentControllerBase {
  constructor(protected readonly service: TesterAgentService) {
    super(service);
  }
}
