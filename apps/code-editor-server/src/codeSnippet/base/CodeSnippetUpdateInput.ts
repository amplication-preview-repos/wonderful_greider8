/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { CompletionUpdateManyWithoutCodeSnippetsInput } from "./CompletionUpdateManyWithoutCodeSnippetsInput";
import { Type } from "class-transformer";
import { SuggestionUpdateManyWithoutCodeSnippetsInput } from "./SuggestionUpdateManyWithoutCodeSnippetsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class CodeSnippetUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code?: string | null;

  @ApiProperty({
    required: false,
    type: () => CompletionUpdateManyWithoutCodeSnippetsInput,
  })
  @ValidateNested()
  @Type(() => CompletionUpdateManyWithoutCodeSnippetsInput)
  @IsOptional()
  @Field(() => CompletionUpdateManyWithoutCodeSnippetsInput, {
    nullable: true,
  })
  completions?: CompletionUpdateManyWithoutCodeSnippetsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  language?: string | null;

  @ApiProperty({
    required: false,
    type: () => SuggestionUpdateManyWithoutCodeSnippetsInput,
  })
  @ValidateNested()
  @Type(() => SuggestionUpdateManyWithoutCodeSnippetsInput)
  @IsOptional()
  @Field(() => SuggestionUpdateManyWithoutCodeSnippetsInput, {
    nullable: true,
  })
  suggestions?: SuggestionUpdateManyWithoutCodeSnippetsInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { CodeSnippetUpdateInput as CodeSnippetUpdateInput };