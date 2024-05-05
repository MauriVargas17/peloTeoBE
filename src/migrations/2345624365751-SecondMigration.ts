import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { definition } from "../models/Activity"; 

export class SecondMigration2345624365751 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: definition.collection,
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "100",
                    isNullable: true
                },
                {
                    name: "sport",
                    type: "varchar",
                    length: "100",
                    isNullable: true
                },
                {
                    name: "latitude",
                    type: "decimal",
                    precision: 10,
                    scale: 6,
                    isNullable: false,
                },
                {
                    name: "longitude",
                    type: "decimal",
                    precision: 10,
                    scale: 6,
                    isNullable: false,
                },
                {
                    name: "google_location",
                    type: "varchar",
                    length: "255",
                    isNullable: true
                },
                {
                    name: "time_init",
                    type: "varchar",
                    length: "255",
                    isNullable: false
                },
                {
                    name: "time_end",
                    type: "varchar",
                    length: "255",
                    isNullable: false
                },
                {
                    name: "owner",
                    type: "varchar",
                    length: "100",
                    isNullable: false
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP"
                },
                {
                    name: "updatedAt",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                    onUpdate: "CURRENT_TIMESTAMP"
                }
            ]
        });

        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(definition.collection);
    }

}
