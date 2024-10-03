import rateLimit from "express-rate-limit";

export const generalRateLimit = rateLimit({
    windowMs: 1*60*1000,
    max: 100,
    message: "Too many requests from this API key, please try again later.",
    standardHeaders: true,
    legacyHeaders: false
})


export const authRateLimit = rateLimit({
    windowMs: 1*60*1000,
    max: 200,
    message: "Too many requests from this API key, please try again later.",
    standardHeaders: true,
    legacyHeaders: false
})