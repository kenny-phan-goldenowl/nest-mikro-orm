import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class createPostDto {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  metaDescription: string;

  @Field()
  metaTitle?: string;

  @Field()
  metaKeyword: string;
}
