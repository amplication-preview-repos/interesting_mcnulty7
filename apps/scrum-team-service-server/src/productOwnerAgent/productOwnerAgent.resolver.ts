import * as graphql from "@nestjs/graphql";
import { ProductOwnerAgentResolverBase } from "./base/productOwnerAgent.resolver.base";
import { ProductOwnerAgent } from "./base/ProductOwnerAgent";
import { ProductOwnerAgentService } from "./productOwnerAgent.service";

@graphql.Resolver(() => ProductOwnerAgent)
export class ProductOwnerAgentResolver extends ProductOwnerAgentResolverBase {
  constructor(protected readonly service: ProductOwnerAgentService) {
    super(service);
  }
}
