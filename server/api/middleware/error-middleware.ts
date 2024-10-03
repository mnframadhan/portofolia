import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ResponseError } from "../errors/response-error";
import { ErrorResponse } from "../types/responses";

export const errorMiddleware = async (error: Error, req: Request, res: Response, next: NextFunction) => {

    if (error instanceof ZodError) {

        const response : ErrorResponse<ZodError> = {
            code: 400,
            status: "BAD REQUEST",
            message: "Data yang dimasukkan tidak sesuai",
            data: error
        } 

        res.status(400).json(response);

    } else if (error instanceof ResponseError) {

        const response : ErrorResponse<ResponseError> = {

            code: error.status,
            status: error.name,
            message: error.message
        }

        res.status(error.status).json(response);

    } else {
        
        const response : ErrorResponse<string> = {

            code: 500,
            status: "INTERNAL SERVER ERROR",
            message: "Terjadi kesalahan",
            data: "Something Error"

        }

        res.status(500).json(response);
    }

}