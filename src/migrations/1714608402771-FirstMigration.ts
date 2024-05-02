import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { definition } from "../models/User"; 

export class FirstMigration1714608402771 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: definition.collection,
            columns: definition.cols.map(col => ({
                name: col,
                type: this.getColumnType(col), 
                isNullable: this.isNullable(col),
                isPrimary: col === 'id', 
            }))
        });

        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(definition.collection);
    }

    private getColumnType(colName: string): string {
        const typeMapping: {[key: string]: string} = {
            id: "int",
            firstName: "varchar",
            lastName: "varchar",
            email: "varchar",
            password: "varchar",
            createdAt: "timestamp",
            updatedAt: "timestamp"
        };

        return typeMapping[colName] || "varchar";
    }

    private isNullable(colName: string): boolean {
        const nullableFields: string[] = ['firstName', 'lastName'];
        return nullableFields.includes(colName);
    }

}
