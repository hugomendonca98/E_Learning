import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateLesson1621388929495 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'lesson',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'course_id',
            type: 'uuid',
          },
          {
            name: 'duration',
            type: 'numeric',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'video_id',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'addCourseIdToLesson',
            columnNames: ['course_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'course',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('lesson');
  }
}
