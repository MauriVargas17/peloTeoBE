import { Router } from 'express';
import { ActivityController } from '../controllers/activityController';
export function activityRoutes(userController: ActivityController): Router {
    const router = Router();

    router.post('/', userController.createActivity);
    router.get('/', userController.getAllActivities);
    router.get('/:owner', userController.getActivityByOwner);
    router.get('/:id', userController.getActivityById);
    router.put('/:id', userController.updateActivity);
    router.delete('/:id', userController.deleteActivity);

    return router;
}
