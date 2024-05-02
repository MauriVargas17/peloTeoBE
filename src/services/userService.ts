import { User } from "../models/User";
import { UserRepository } from "../repositories/userRepository";

export class UserService {
    constructor(private userRepository: UserRepository
    ) {}

    async createUser(userData: User): Promise<User> {
        return this.userRepository.createUser(userData);
    }

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.findAllUsers();
    }

    async getUserById(id: number): Promise<User | null> {
        return this.userRepository.findUserById(id);
    }

    async getUserByEmail(email: string): Promise<User | null> {
        return this.userRepository.findUserByEmail(email);
    }

    async updateUser(id: number, userData: Partial<User>): Promise<User> {
        return this.userRepository.updateUser(id, userData);
    }

    async deleteUser(id: number): Promise<void | User> {
        return this.userRepository.deleteUser(id);
    }

}
