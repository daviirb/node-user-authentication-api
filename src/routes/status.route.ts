import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes'

const statusCode = Router()

statusCode.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK)
})

export default statusCode
