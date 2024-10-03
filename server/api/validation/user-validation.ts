import { z, ZodType } from "zod";

export class UserValidation {

    static readonly CREATE : ZodType = z.object({

        username: z.string().min(4).max(100),
        email: z.string().email().min(4).max(100),
        password: z.string().min(4).max(100),
        full_name: z.string().min(4).max(100),
        nick_name: z.string().min(2).max(100),
    });

    static readonly LOGIN : ZodType = z.object({

        username: z.string().min(4).max(100).optional(),
        email: z.string().email().min(4).max(100).optional(),
        password: z.string().min(4).max(100)

    })

}