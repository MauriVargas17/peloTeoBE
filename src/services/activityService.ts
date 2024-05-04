import { Activity } from "../models/Activity";
import { ActivityRepository } from "../repositories/activityRepository";

export class ActivityService {
    constructor(private activityRespository: ActivityRepository
    ) {}

    async createActivity(userData: Activity): Promise<Activity> {
        return this.activityRespository.createActivity(userData);
    }

    async getAllActivities(): Promise<Activity[]> {
        return this.activityRespository.findAllActivities();
    }

    async getActivityById(id: number): Promise<Activity | null> {
        return this.activityRespository.findActivityById(id);
    }

    async getActivityByOwner(owner: string): Promise<Activity[] | null> {
        return this.activityRespository.findActivityByOwner(owner);
    }

    async updateActivity(id: number, userData: Partial<Activity>): Promise<Activity> {
        return this.activityRespository.updateActivity(id, userData);
    }

    async deleteActivity(id: number): Promise<void | Activity> {
        return this.activityRespository.deleteActivity(id);
    }

}
