import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Activity {
    @PrimaryGeneratedColumn() 
    id?: number;

    @Column({ type: "varchar", length: 100 }) 
    name?: string;

    @Column({ type: "varchar", length: 100 })
    sport?: string;

    @Column({ type: "varchar", length: 255 })
    location?: string;

    @Column({ type: "varchar", length: 255 })
    google_location?: string;

    @Column({ type: "varchar", length: 100 })
    time_init?: string;

    @Column({ type: "varchar", length: 100 })
    time_end?: string;

    @Column({ type: "varchar", length: 100 })
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
