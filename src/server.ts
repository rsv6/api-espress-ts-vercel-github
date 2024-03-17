import express from 'express';
import { HomeController } from './controllers/HomeController';
import { UsersController } from './controllers/UsersController';

  const app = express();

  app.get('/', HomeController);
  app.get('/user', UsersController);

  app.listen(3333, () => {
    console.log('HTTP Server running!');
  });   