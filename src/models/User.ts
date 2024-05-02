import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn() 
    id?: number;

    @Column({ type: "varchar", length: 100 }) 
    firstName?: string;

    @Column({ type: "varchar", length: 100 })
    lastName?: string;

    @Column({ type: "varchar", length: 255, unique: true })
    email?: string;

    @Column({ type: "varchar" })
    password?: string;

    @CreateDateColumn() 
    createdAt?: Date;

    @UpdateDateColumn() 
    updatedAt?: Date;
}

export const collection = 'user';
export const definition = {
    collection,
    cols: [
        'id',
        'firstName',
        'lastName',
        'email',
        'password',
        'createdAt',
        'updatedAt'
    ]
};
