import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';

import { PostType } from './post.type';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  // Queries
  @Query(() => String) // () => String mean the return type of the function is string
  getSomething() {
    return 'Hello world';
  }

  // Mutations
  @Mutation(() => PostType)
  createPost(
    @Args('id') id: string,
    @Args('title') title: string,
    @Args('content') content: string,
    @Args('metaDescription') metaDescription: string,
  ) {
    return this.postService.createPost(id, title, content, metaDescription);
  }
}
