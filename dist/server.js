"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HomeController_1 = require("./controllers/HomeController");
const UsersController_1 = require("./controllers/UsersController");
const app = (0, express_1.default)();
app.get('/', HomeController_1.HomeController);
app.get('/user', UsersController_1.UsersController);
app.listen(3333, () => {
    console.log('HTTP Server running!');
});
