import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CodeSnippetModuleBase } from "./base/codeSnippet.module.base";
import { CodeSnippetService } from "./codeSnippet.service";
import { CodeSnippetController } from "./codeSnippet.controller";
import { CodeSnippetResolver } from "./codeSnippet.resolver";

@Module({
  imports: [CodeSnippetModuleBase, forwardRef(() => AuthModule)],
  controllers: [CodeSnippetController],
  providers: [CodeSnippetService, CodeSnippetResolver],
  exports: [CodeSnippetService],
})
export class CodeSnippetModule {}
