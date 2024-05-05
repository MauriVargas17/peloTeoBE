import { Request, Response } from 'express';
import { ActivityService } from '../services/activityService';

export class ActivityController {
    constructor(private activityService: ActivityService) {}

    createActivity = async (req: Request, res: Response): Promise<Response> => {
        try {
            const activity = await this.activityService.createActivity(req.body);
            return res.status(201).json(activity);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    };

    getAllActivities = async (req: Request, res: Response): Promise<Response> => {
        try {
            const activitys = await this.activityService.getAllActivities();
            return res.status(200).json(activitys);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    };

    getActivityById = async (req: Request, res: Response): Promise<Response> => {
        try {
            const activity = await this.activityService.getActivityById(parseInt(req.params.id));
            if (!activity) {
                return res.status(404).json({ message: 'Activity not found' });
            }
            return res.json(activity);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }; 

    getActivityByOwner = async (req: Request, res: Response): Promise<Response> => {
        try {
            const activity = await this.activityService.getActivityByOwner((req.params.owner));
            if (!activity) {
                return res.status(404).json({ message: 'Activity not found' });
            }
            return res.json(activity);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }; 

    updateActivity = async (req: Request, res: Response): Promise<Response> => {
        try {
            const activity = await this.activityService.updateActivity(parseInt(req.params.id), req.body);
            return res.json(activity);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    };

    deleteActivity = async (req: Request, res: Response): Promise<Response> => {
        try {
            await this.activityService.deleteActivity(parseInt(req.params.id));
            return res.status(204).send();
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    };
}
