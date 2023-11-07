import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/postgresql';

import { Post } from './post.entity';
import { createPostDto } from './dto/create-post';

@Injectable()
export class PostService {
  constructor(private readonly em: EntityManager) {}

  async getAllPost(limit?: number): Promise<Post[]> {
    const options: any = {};
    if (limit) {
      options.limit = limit; // Set the limit if it's provided
    }
    const postList = await this.em.find(Post, {}, options);
    return postList;
  }

  async getSinglePost(id: string): Promise<Post | { message: string }> {
    const post = await this.em.findOne(Post, id);

    if (!post) {
      return { message: `No post with id ${id} found` };
    }

    return post;
  }

  async createPost(data: createPostDto): Promise<Post> {
    const { id, title, content, metaDescription, metaKeyword, metaTitle } =
      data;
    const newPost = this.em.create(Post, {
      id: 'testing' + id,
      title,
      content,
      metaDescription,
      metaKeyword,
      metaTitle,
    });

    await this.em.persistAndFlush(newPost);

    return newPost;
  }
}
