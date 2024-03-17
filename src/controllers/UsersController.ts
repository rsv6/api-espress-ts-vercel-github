import { Request, Response } from "express";

const users = [
    {id: 1, name: "Rafael"},
    {id: 2, name: "João"},
    {id: 3, name: "Flavio"},
    {id: 4, name: "Erion"},
    {id: 5, name: "Italo"},
]

export const UsersController = (req: Request, res: Response) => {

    return res.json({ users });
}