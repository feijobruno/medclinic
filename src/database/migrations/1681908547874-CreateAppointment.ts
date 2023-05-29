import {MigrationInterface, QueryRunner , Table} from "typeorm";

export class CreateAppointment1681908547874 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "appointments",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "patient_id",
                  type: "uuid",
                  isNullable: true,
                },
                {
                  name: "telephone",
                  type: "varchar",
                },
                {
                  name: "mobile",
                  type: "varchar",
                },
                {
                  name: "doctor_id",
                  type: "uuid",
                  isNullable: true,
                },
                {
                  name: "type",
                  type: "varchar",
                },
                {
                  name: "sub_type",
                  type: "varchar",
                },
                {
                  name: "health_insurance",
                  type: "varchar",
                },
                {
                  name: "scheduled_at",
                  type: "timestamp"
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
              foreignKeys: [
                {
                  name: "FKDoctorAppointment",
                  referencedTableName: "doctors",
                  referencedColumnNames: ["id"],
                  columnNames: ["doctor_id"],
                  onDelete: "SET NULL",
                  onUpdate: "SET NULL",
                },
                {
                  name: "FKPatientAppointment",
                  referencedTableName: "patients",
                  referencedColumnNames: ["id"],
                  columnNames: ["patient_id"],
                  onDelete: "SET NULL",
                  onUpdate: "SET NULL",
                },
              ],
            })
          );
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("appointments");
    }

}
