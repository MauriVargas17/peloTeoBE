/*import { Request, Response } from 'express';
import { ActivityService } from '../services/activityService';
import { UserController } from './userController'

export class RecoveryController {
    constructor(private userController: UserController) {}

    createNewPassword = async (req: Request, res: Response) => {
        const newPassword = generateRandomPassword();
        user.password = hashedPassword;

        // Send the new password to the user's email
        await sendNewPasswordEmail(email, newPassword);

        return res.status(200).json({ message: 'Password reset successful. Check your email for the new password.' });
        try {
            //const activity = await this.userController.createActivity(req.body);
            return res.status(201).json();
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    };
}
*/