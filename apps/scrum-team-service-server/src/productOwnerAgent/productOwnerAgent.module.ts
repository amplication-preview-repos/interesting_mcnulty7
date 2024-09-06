import { Module } from "@nestjs/common";
import { ProductOwnerAgentModuleBase } from "./base/productOwnerAgent.module.base";
import { ProductOwnerAgentService } from "./productOwnerAgent.service";
import { ProductOwnerAgentController } from "./productOwnerAgent.controller";
import { ProductOwnerAgentResolver } from "./productOwnerAgent.resolver";

@Module({
  imports: [ProductOwnerAgentModuleBase],
  controllers: [ProductOwnerAgentController],
  providers: [ProductOwnerAgentService, ProductOwnerAgentResolver],
  exports: [ProductOwnerAgentService],
})
export class ProductOwnerAgentModule {}
