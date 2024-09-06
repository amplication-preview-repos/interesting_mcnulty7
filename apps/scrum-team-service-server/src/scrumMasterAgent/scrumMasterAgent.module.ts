import { Module } from "@nestjs/common";
import { ScrumMasterAgentModuleBase } from "./base/scrumMasterAgent.module.base";
import { ScrumMasterAgentService } from "./scrumMasterAgent.service";
import { ScrumMasterAgentController } from "./scrumMasterAgent.controller";
import { ScrumMasterAgentResolver } from "./scrumMasterAgent.resolver";

@Module({
  imports: [ScrumMasterAgentModuleBase],
  controllers: [ScrumMasterAgentController],
  providers: [ScrumMasterAgentService, ScrumMasterAgentResolver],
  exports: [ScrumMasterAgentService],
})
export class ScrumMasterAgentModule {}
