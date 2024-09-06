import { Module } from "@nestjs/common";
import { MetaAgentModuleBase } from "./base/metaAgent.module.base";
import { MetaAgentService } from "./metaAgent.service";
import { MetaAgentController } from "./metaAgent.controller";
import { MetaAgentResolver } from "./metaAgent.resolver";

@Module({
  imports: [MetaAgentModuleBase],
  controllers: [MetaAgentController],
  providers: [MetaAgentService, MetaAgentResolver],
  exports: [MetaAgentService],
})
export class MetaAgentModule {}
