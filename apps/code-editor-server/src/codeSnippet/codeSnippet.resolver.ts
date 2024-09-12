import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CodeSnippetResolverBase } from "./base/codeSnippet.resolver.base";
import { CodeSnippet } from "./base/CodeSnippet";
import { CodeSnippetService } from "./codeSnippet.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CodeSnippet)
export class CodeSnippetResolver extends CodeSnippetResolverBase {
  constructor(
    protected readonly service: CodeSnippetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
