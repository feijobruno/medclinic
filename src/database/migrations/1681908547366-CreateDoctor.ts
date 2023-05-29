import {MigrationInterface, QueryRunner , Table} from "typeorm";

export class CreateDoctor1681908547366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "doctors",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                  name: "specialty_id",
                  type: "uuid",
                  isNullable: true,
                },
                {
                  name: "crm",
                  type: "varchar",
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
              foreignKeys: [
                {
                  name: "FKDoctorSpecialty",
                  referencedTableName: "specialties",
                  referencedColumnNames: ["id"],
                  columnNames: ["specialty_id"],
                  onDelete: "SET NULL",
                  onUpdate: "SET NULL",
                },
              ],
            })
          );
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("doctors");
    }

}
