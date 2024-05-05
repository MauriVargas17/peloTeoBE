import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Activity {
    @PrimaryGeneratedColumn() 
    id?: number;

    @Column({ type: "varchar", length: 100, nullable: true }) 
    name?: string;

    @Column({ type: "varchar", length: 100, nullable: true })
    sport?: string;

    @Column({type: "decimal", precision: 10, scale: 6, default: 0, nullable: false})
    latitude?: string;

    @Column({type: "decimal", precision: 10, scale: 6, default: 0, nullable: false})
    longitude?: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    google_location?: string;

    @Column({ type: "varchar", length: 100, nullable: false })
    time_init?: string;

    @Column({ type: "varchar", length: 100, nullable: false })
    time_end?: string;

    @Column({ type: "varchar", length: 100, nullable: false })
    owner?: string;

    @CreateDateColumn() 
    createdAt?: Date;

    @UpdateDateColumn() 
    updatedAt?: Date;
}

export const collection = 'activity';
export const definition = {
    collection,
    cols: [
        'id',
        'name',
        'sport',
        'location',
        'google_location',
        'time_init',
        'time_end',
        'owner',
        'createdAt',
        'updatedAt'
    ]
};
