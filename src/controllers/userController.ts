import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class UserController {
    constructor(private userService: UserService) {}

    createUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            const user = await this.userService.createUser(req.body);
            return res.status(201).json(user);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    };

    getAllUsers = async (req: Request, res: Response): Promise<Response> => {
        try {
            const users = await this.userService.getAllUsers();
            return res.status(200).json(users);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    };

    getUserById = async (req: Request, res: Response): Promise<Response> => {
        try {
            const user = await this.userService.getUserById(parseInt(req.params.id));
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.json(user);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }; 

    getUserByEmail = async (req: Request, res: Response): Promise<Response> => {
        try {
            const user = await this.userService.getUserByEmail(req.body.email);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.json(user);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    updateUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            if (req.body.email) {
                const isEmailInUse = await this.userService.getUserByEmail(req.body.email) !== null;
                if (isEmailInUse) {
                    return res.status(400).json({ message: 'Email already in use' });
                } 
            }
            const user = await this.userService.updateUser(parseInt(req.params.id), req.body);
            return res.json(user);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    };

    deleteUser = async (req: Request, res: Response): Promise<Response> => {
        try {
            await this.userService.deleteUser(parseInt(req.params.id));
            return res.status(204).send();
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    };
}
