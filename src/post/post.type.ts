import { ObjectType, Field, ID } from '@nestjs/graphql';

// all type in this file must match with the post.enity.ts
@ObjectType()
export class PostType {
  @Field(() => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  title!: string;

  @Field()
  content!: string;

  @Field(() => String, { nullable: true })
  metaDescription?: string;

  @Field(() => String, { nullable: true })
  metaKeyword?: string;

  @Field(() => String, { nullable: true })
  metaTitle?: string;
}
