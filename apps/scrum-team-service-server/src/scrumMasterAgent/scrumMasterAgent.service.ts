import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScrumMasterAgentServiceBase } from "./base/scrumMasterAgent.service.base";

@Injectable()
export class ScrumMasterAgentService extends ScrumMasterAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
