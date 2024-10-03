import { NextFunction, Request, Response } from "express";
import { db } from "../../config/database";
import { users } from "../../schema/schema";
import { eq } from "drizzle-orm";
import { ErrorResponse } from "../../types/responses";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.get('X-API-TOKEN');

    const errorResponse : ErrorResponse = {

        code: 401,
        message: "Unauthorized",
        status: "Error",
    }

    if (!token) {

        res.status(401).json(errorResponse);

    } else {

        const user = await db
                        .select()
                        .from(users)
                        .where(eq(users.token, token))
        
        if(user.length > 0) {
            next();
            return;
        } else {
            res.status(401).json(errorResponse);
        }
    }

    

    

}