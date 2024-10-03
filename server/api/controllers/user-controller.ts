import { NextFunction, Request, Response } from "express";
import { UserLoginRequest, UserRegisterRequest } from "../models/user-model";
import { UserServices } from "../services/user-service";

export class UserController {

    static async registerUser(req: Request, res: Response, next: NextFunction) {

        try {

            const request: UserRegisterRequest = req.body as UserRegisterRequest;
            const response = await UserServices.registerUser(request);

            res.status(201).json(response);

        } catch (error) {
            next(error)
        }
    }

    static async loginUser(req: Request, res: Response, next: NextFunction) {

        try {

            const request: UserLoginRequest = req.body as UserLoginRequest;
            const response = await UserServices.loginUser(request);

            res.cookie("X-API-TOKEN", response.data.token, {maxAge: 1000*60*60*24});
            res.status(200);
            res.json(response);

        } catch (error) {
            next(error)
        }

    }

    static async getCurrentUser(req: Request, res: Response, next: NextFunction) {

        try {

            const token: string = req.get('X-API-TOKEN') as string;
            const response = await UserServices.getCurrentUser(token);

            res.status(200);
            res.json(response);

        } catch (error) {
            next(error)
        }
    }

}