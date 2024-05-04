import "reflect-metadata";
import express from 'express';
import { AppDataSource } from "./data-source";
import { userRepository } from './repositories/userRepository'; 
import { UserService } from './services/userService';
import { UserController } from './controllers/userController';
import { userRoutes } from './routes/userRoutes';
import { activityRepository } from './repositories/activityRepository'; 
import { ActivityService } from "./services/activityService";
import { ActivityController } from "./controllers/activityController";
import { activityRoutes } from './routes/activityRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

AppDataSource.initialize().then(async () => {
    console.log("Database connection established.");
    await AppDataSource.runMigrations({ transaction: "all" });
    console.log("Migrations successfully run.");

    const userService = new UserService(userRepository);
    const userController = new UserController(userService);
    const routes = userRoutes(userController);

    const activityService = new ActivityService(activityRepository);
    const activityController = new ActivityController(activityService);
    const actRoutes = activityRoutes(activityController);

    app.use(express.json());
    app.use('/users', routes);
    app.use('/activity', actRoutes);

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => {
    console.error("Failed to initialize data source:", error);
});
