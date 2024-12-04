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
import { CodeSnippetWhereUniqueInput } from "../../codeSnippet/base/CodeSnippetWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SuggestionCreateInput {
  @ApiProperty({
    required: false,
    type: () => CodeSnippetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CodeSnippetWhereUniqueInput)
  @IsOptional()
  @Field(() => CodeSnippetWhereUniqueInput, {
    nullable: true,
  })
  codeSnippet?: CodeSnippetWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  relevance?: number | null;

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
  text?: string | null;
}

export { SuggestionCreateInput as SuggestionCreateInput };
