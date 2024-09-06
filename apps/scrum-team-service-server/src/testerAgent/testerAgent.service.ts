import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TesterAgentServiceBase } from "./base/testerAgent.service.base";

@Injectable()
export class TesterAgentService extends TesterAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
