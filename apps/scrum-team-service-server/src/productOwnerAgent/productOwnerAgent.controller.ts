import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductOwnerAgentService } from "./productOwnerAgent.service";
import { ProductOwnerAgentControllerBase } from "./base/productOwnerAgent.controller.base";

@swagger.ApiTags("productOwnerAgents")
@common.Controller("productOwnerAgents")
export class ProductOwnerAgentController extends ProductOwnerAgentControllerBase {
  constructor(protected readonly service: ProductOwnerAgentService) {
    super(service);
  }
}
