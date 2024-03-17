import express from 'express';
import { HomeController } from './controllers/HomeController';

  const app = express();

  app.get('/users', HomeController);

  app.listen(3333, () => {
    console.log('HTTP Server running!');
  });   