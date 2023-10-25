import { Migration } from '@mikro-orm/migrations';

export class Migration20231025144224 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("id" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null, "content" varchar(255) not null, "meta_description" varchar(255) null, constraint "post_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "post" cascade;');
  }

}
