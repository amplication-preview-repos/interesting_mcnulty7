import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductOwnerAgentServiceBase } from "./base/productOwnerAgent.service.base";

@Injectable()
export class ProductOwnerAgentService extends ProductOwnerAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
