import { Entity, Property, PrimaryKey } from '@mikro-orm/core';

// all item in this file must match with the post.type.ts
@Entity()
export class Post {
  @PrimaryKey()
  id: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  title!: string;

  @Property()
  content!: string;

  @Property({ nullable: true })
  metaDescription?: string;

  @Property({ nullable: true })
  metaKeyword?: string;

  @Property({ nullable: true })
  metaTitle?: string;
}
