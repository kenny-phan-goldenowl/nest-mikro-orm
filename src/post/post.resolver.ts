import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';

import { PostType } from './post.type';
import { PostService } from './post.service';
import { createPostDto } from './dto/create-post';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  // Queries
  @Query(() => [PostType]) // () => String mean the return type of the function is string
  getPost(
    @Args('limit', { defaultValue: null })
    limit: number | null,
  ) {
    return this.postService.getAllPost(limit);
  }

  @Query(() => PostType)
  async getSinglePost(@Args('id') id?: string) {
    const result = await this.postService.getSinglePost(id);

    if ('message' in result) {
      throw new Error(result.message);
    }

    return result;
  }

  // Mutations
  @Mutation(() => PostType)
  createPost(@Args('data') data: createPostDto) {
    return this.postService.createPost(data);
  }
}
