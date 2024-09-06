import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeveloperAgentServiceBase } from "./base/developerAgent.service.base";

@Injectable()
export class DeveloperAgentService extends DeveloperAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
