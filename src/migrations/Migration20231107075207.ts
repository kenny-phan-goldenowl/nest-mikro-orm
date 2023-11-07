import { Migration } from '@mikro-orm/migrations';

export class Migration20231107075207 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" add column "meta_keyword" varchar(255) null, add column "meta_title" varchar(255) null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "post" drop column "meta_keyword";');
    this.addSql('alter table "post" drop column "meta_title";');
  }

}
