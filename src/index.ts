import "reflect-metadata";
import express from 'express';
import { AppDataSource } from "./data-source";
import { userRepository } from './repositories/userRepository'; 
import { UserService } from './services/userService';
import { UserController } from './controllers/userController';
import { userRoutes } from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

AppDataSource.initialize().then(async () => {
    console.log("Database connection established.");
    await AppDataSource.runMigrations({ transaction: "all" });
    console.log("Migrations successfully run.");

    const userService = new UserService(userRepository);
    const userController = new UserController(userService);
    const routes = userRoutes(userController);

    app.use(express.json());
    app.use('/users', routes);

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => {
    console.error("Failed to initialize data source:", error);
});
