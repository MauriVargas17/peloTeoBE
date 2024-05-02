import { Router } from 'express';
import { UserController } from '../controllers/userController';
export function userRoutes(userController: UserController): Router {
    const router = Router();

    router.post('/', userController.createUser);
    router.get('/', userController.getAllUsers);
    router.get('/:id', userController.getUserById);
    router.put('/:id', userController.updateUser);
    router.delete('/:id', userController.deleteUser);

    return router;
}
