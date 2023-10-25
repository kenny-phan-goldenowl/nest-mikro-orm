import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/postgresql';

import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(private readonly em: EntityManager) {}

  async createPost(id, title, content, metaDescription): Promise<Post> {
    const newPost = this.em.create(Post, {
      id: 'testing' + id,
      title,
      content,
      metaDescription,
    });

    await this.em.persistAndFlush(newPost);

    return newPost;
  }
}
