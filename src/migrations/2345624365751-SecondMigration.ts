import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { definition } from "../models/Activity"; 

export class SecondMigration2345624365751 implements MigrationInterface {

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
            name: "varchar",
            sport: "varchar",
            latitud: "varchar",
            longitud: "number",
            google_location: "varchar",
            time_init: "varchar",
            time_end: "varchar",
            owner: "varchar",
            createdAt: "date",
            updatedAt: "date"
        };

        return typeMapping[colName] || "varchar";
    }

    private isNullable(colName: string): boolean {
        const nullableFields: string[] = ['google_location'];
        return nullableFields.includes(colName);
    }

}
