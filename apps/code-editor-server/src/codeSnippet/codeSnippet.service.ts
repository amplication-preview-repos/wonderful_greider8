import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CodeSnippetServiceBase } from "./base/codeSnippet.service.base";

@Injectable()
export class CodeSnippetService extends CodeSnippetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
