import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MetaAgentServiceBase } from "./base/metaAgent.service.base";

@Injectable()
export class MetaAgentService extends MetaAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
