import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CodeSnippetService } from "./codeSnippet.service";
import { CodeSnippetControllerBase } from "./base/codeSnippet.controller.base";

@swagger.ApiTags("codeSnippets")
@common.Controller("codeSnippets")
export class CodeSnippetController extends CodeSnippetControllerBase {
  constructor(
    protected readonly service: CodeSnippetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
