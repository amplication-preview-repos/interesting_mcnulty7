import { Module } from "@nestjs/common";
import { TesterAgentModuleBase } from "./base/testerAgent.module.base";
import { TesterAgentService } from "./testerAgent.service";
import { TesterAgentController } from "./testerAgent.controller";
import { TesterAgentResolver } from "./testerAgent.resolver";

@Module({
  imports: [TesterAgentModuleBase],
  controllers: [TesterAgentController],
  providers: [TesterAgentService, TesterAgentResolver],
  exports: [TesterAgentService],
})
export class TesterAgentModule {}
