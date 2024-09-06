/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ScrumMasterAgent } from "./ScrumMasterAgent";
import { ScrumMasterAgentCountArgs } from "./ScrumMasterAgentCountArgs";
import { ScrumMasterAgentFindManyArgs } from "./ScrumMasterAgentFindManyArgs";
import { ScrumMasterAgentFindUniqueArgs } from "./ScrumMasterAgentFindUniqueArgs";
import { DeleteScrumMasterAgentArgs } from "./DeleteScrumMasterAgentArgs";
import { ScrumMasterAgentService } from "../scrumMasterAgent.service";
@graphql.Resolver(() => ScrumMasterAgent)
export class ScrumMasterAgentResolverBase {
  constructor(protected readonly service: ScrumMasterAgentService) {}

  async _scrumMasterAgentsMeta(
    @graphql.Args() args: ScrumMasterAgentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ScrumMasterAgent])
  async scrumMasterAgents(
    @graphql.Args() args: ScrumMasterAgentFindManyArgs
  ): Promise<ScrumMasterAgent[]> {
    return this.service.scrumMasterAgents(args);
  }

  @graphql.Query(() => ScrumMasterAgent, { nullable: true })
  async scrumMasterAgent(
    @graphql.Args() args: ScrumMasterAgentFindUniqueArgs
  ): Promise<ScrumMasterAgent | null> {
    const result = await this.service.scrumMasterAgent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ScrumMasterAgent)
  async deleteScrumMasterAgent(
    @graphql.Args() args: DeleteScrumMasterAgentArgs
  ): Promise<ScrumMasterAgent | null> {
    try {
      return await this.service.deleteScrumMasterAgent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
