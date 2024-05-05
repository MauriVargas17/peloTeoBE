import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { definition } from "../models/User"; 

export class FirstMigration1714608402771 implements MigrationInterface {

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
                    name: "firstName",
                    type: "varchar",
                    length: "100",
                    isNullable: true
                },
                {
                    name: "lastName",
                    type: "varchar",
                    length: "100",
                    isNullable: true
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar",
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
