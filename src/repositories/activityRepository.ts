import { Repository, DataSource } from "typeorm";
import { Activity } from "../models/Activity";
import { AppDataSource } from "../data-source";

export type ActivityRepository = Repository<Activity> & {
    createActivity: (userData: Activity) => Promise<Activity>;
    findAllActivities: () => Promise<Activity[]>;
    findActivityById: (id: number) => Promise<Activity | null>;
    findActivityByOwner: (owner: string) => Promise<Activity[] | null>;
    updateActivity: (id: number, userData: Partial<Activity>) => Promise<Activity>;
    deleteActivity: (id: number) => Promise<void | Activity>;
};

export const activityRepository: ActivityRepository = AppDataSource.getRepository(Activity).extend({

    createActivity(userData: Activity): Promise<Activity> {
        const user = this.create(userData); 
        return this.save(user); 
    },

    findAllActivities(): Promise<Activity[]> {
        return this.find(); 
    },

    findActivityById(id: number): Promise<Activity | null> {
        return this.findOneBy({ id }); 
    },

    findActivityByOwner(owner: string): Promise<Activity[] | null> {
        return this.findBy({ owner }); 
    },

    updateActivity(id: number, userData: Partial<Activity>): Promise<Activity> {
        return this.findOneBy({ id }).then(user => {
            if (!user) throw new Error('Activity not found');
            Object.assign(user, userData);
            return this.save(user); 
        });
    },

    deleteActivity(id: number): Promise<void | Activity > {
        return this.findOneBy({ id }).then(user => {
            if (!user) throw new Error('Activity not found');
            return this.remove(user); 
        });
    },

});
