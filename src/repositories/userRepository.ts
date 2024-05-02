import { Repository, DataSource } from "typeorm";
import { User } from "../models/User";
import { AppDataSource } from "../data-source";

export type UserRepository = Repository<User> & {
    createUser: (userData: User) => Promise<User>;
    findAllUsers: () => Promise<User[]>;
    findUserById: (id: number) => Promise<User | null>;
    findUserByEmail: (email: string) => Promise<User | null>;
    updateUser: (id: number, userData: Partial<User>) => Promise<User>;
    deleteUser: (id: number) => Promise<void | User>;
};

export const userRepository: UserRepository = AppDataSource.getRepository(User).extend({
    createUser(userData: User): Promise<User> {
        const user = this.create(userData); 
        return this.save(user); 
    },

    findAllUsers(): Promise<User[]> {
        return this.find(); 
    },

    findUserById(id: number): Promise<User | null> {
        return this.findOneBy({ id }); 
    },

    findUserByEmail(email): Promise<User | null> {
        return this.findOneBy({ email });
    },

    updateUser(id: number, userData: Partial<User>): Promise<User> {
        return this.findOneBy({ id }).then(user => {
            if (!user) throw new Error('User not found');
            Object.assign(user, userData);
            return this.save(user); 
        });
    },

    deleteUser(id: number): Promise<void | User > {
        return this.findOneBy({ id }).then(user => {
            if (!user) throw new Error('User not found');
            return this.remove(user); 
        });
    },

});
