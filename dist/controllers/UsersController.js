"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const users = [
    { id: 1, name: "Rafael" },
    { id: 2, name: "João" },
    { id: 3, name: "Flavio" },
    { id: 4, name: "Erion" },
    { id: 5, name: "Italo" },
];
const UsersController = (req, res) => {
    return res.json({ users });
};
exports.UsersController = UsersController;
