import rateLimit from "express-rate-limiter";

export const limiter = rateLimit({
    windowsMs:15*60*1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});