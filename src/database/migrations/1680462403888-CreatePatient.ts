import {MigrationInterface, QueryRunner , Table} from "typeorm";

export class CreatePatient1680462403888 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "patients",
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
                  name: "cpf",
                  type: "varchar",
                },
                {
                  name: "telephone",
                  type: "varchar",
                },
                {
                  name: "address",
                  type: "varchar",
                },
                {
                  name: "city",
                  type: "varchar",
                },
                {
                  name: "gender",
                  type: "varchar",
                },
                {
                  name: "health_insurance",
                  type: "varchar",
                },
                {
                  name: "date_of_birth",
                  type: "timestamp"               
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
            })
          );
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("patients");
    }

}
