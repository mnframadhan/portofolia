import { eq } from "drizzle-orm";
import { db } from "../config/database";
import { UserLoginRequest, UserLoginResponse, UserRegisterRequest, UserRegisterResponse, UserResponse } from "../models/user-model";
import { users } from "../schema/schema";
import { ResponseSimple } from "../types/responses";
import { UserValidation } from "../validation/user-validation";
import { Validation } from "../validation/Validation";
import { ResponseError } from "../errors/response-error";
import bcrypt from "bcrypt";
import { v4 } from "uuid";

export class UserServices {

    static async registerUser (request: UserRegisterRequest) : Promise<ResponseSimple<UserRegisterResponse>> {

        const validatedRequest = Validation.validate(UserValidation.CREATE, request);

        // count email
        const nEmail = await db
                        .select()
                        .from(users)
                        .where(eq(users.email, validatedRequest.email))

        if(nEmail.length > 0) {
            throw new ResponseError(400, "Email telah digunakan")
        }

        // password encription
        validatedRequest.password = await bcrypt.hash(validatedRequest.password, 8);

        const insertedData = {
            ...validatedRequest,
            id: v4(),
            created_at: String(Date.now())
        }

        // insert into database
        await db
            .insert(users)
            .values(insertedData)

        const responseData : UserRegisterResponse = {
            username: validatedRequest.username,
            email: validatedRequest.email,
            full_name: validatedRequest.full_name,
            nick_name: validatedRequest.nick_name
        }

        // define response
        const response : ResponseSimple<UserRegisterResponse> = {
            code: 201,
            status: "OK",
            data: responseData
            
        }

        return response;

    }

    static async loginUser(request: UserLoginRequest) : Promise<ResponseSimple<UserLoginResponse>> {

        const validatedRequest = Validation.validate(UserValidation.LOGIN, request);

        
        let user;

        if (validatedRequest.email) {

            user = await db
                        .select({
                            email: users.email,
                            username: users.username
                        })
                        .from(users)
                        .where(eq(users.email, validatedRequest.email))

        } else if (validatedRequest.username) {

            user = await db
                        .select({
                            email: users.email,
                            username: users.username
                        })
                        .from(users)
                        .where(eq(users.username, validatedRequest.username))

        }

        let token;

        if (user!.length == 0) {
            throw new ResponseError(401, "Username atau Password Salah");
        } else {
            
            token = v4()
            await db
                    .update(users)
                    .set({token: token})
                    .where(eq(users.email, user![0].email))
        }

        const response : ResponseSimple<UserLoginResponse> = {
            code: 200,
            status: "OK",
            data: {
                email: user![0].email,
                username: user![0].username,
                token: token
            }
        }

        return response;
    }

    static async getCurrentUser(token: string) : Promise<ResponseSimple<UserResponse>> {


        const currentUser = await db
                                .select({
                                    id: users.id,
                                    username: users.username,
                                    email: users.email,
                                    full_name: users.username,
                                    nick_name: users.nick_name,
                                    token: users.token,
                                    created_at: users.created_at
                                })
                                .from(users)
                                .where(eq(users.token, token))

        if (!currentUser) {
            throw new ResponseError(401, "Unauthorized")
        }


        const response: ResponseSimple<UserResponse> = {

            code: 200,
            status: "OK",
            data: currentUser[0]
            
        }

        return response;

    }

}