import { Module } from "@nestjs/common";
import { DeveloperAgentModuleBase } from "./base/developerAgent.module.base";
import { DeveloperAgentService } from "./developerAgent.service";
import { DeveloperAgentController } from "./developerAgent.controller";
import { DeveloperAgentResolver } from "./developerAgent.resolver";

@Module({
  imports: [DeveloperAgentModuleBase],
  controllers: [DeveloperAgentController],
  providers: [DeveloperAgentService, DeveloperAgentResolver],
  exports: [DeveloperAgentService],
})
export class DeveloperAgentModule {}
