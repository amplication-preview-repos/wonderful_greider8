/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Completion as PrismaCompletion,
  CodeSnippet as PrismaCodeSnippet,
} from "@prisma/client";

export class CompletionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CompletionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.completion.count(args);
  }

  async completions(
    args: Prisma.CompletionFindManyArgs
  ): Promise<PrismaCompletion[]> {
    return this.prisma.completion.findMany(args);
  }
  async completion(
    args: Prisma.CompletionFindUniqueArgs
  ): Promise<PrismaCompletion | null> {
    return this.prisma.completion.findUnique(args);
  }
  async createCompletion(
    args: Prisma.CompletionCreateArgs
  ): Promise<PrismaCompletion> {
    return this.prisma.completion.create(args);
  }
  async updateCompletion(
    args: Prisma.CompletionUpdateArgs
  ): Promise<PrismaCompletion> {
    return this.prisma.completion.update(args);
  }
  async deleteCompletion(
    args: Prisma.CompletionDeleteArgs
  ): Promise<PrismaCompletion> {
    return this.prisma.completion.delete(args);
  }

  async getCodeSnippet(parentId: string): Promise<PrismaCodeSnippet | null> {
    return this.prisma.completion
      .findUnique({
        where: { id: parentId },
      })
      .codeSnippet();
  }
}
