import { Request, Response } from "express";

export const HomeController = (req: Request, res: Response) => {

    return res.json({ msg: 'Hello World Vecel, here was modify return!' });
}