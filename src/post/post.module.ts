import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Post } from './post.entity';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';

@Module({
  imports: [MikroOrmModule.forFeature([Post])],
  providers: [PostService, PostResolver],
})
export class PostModule {}
