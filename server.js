import Debug from 'debug';
import { config } from 'dotenv';

const debug = Debug('http');

process.on('uncaughtException', (error) => {
  debug('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  debug(error.name, error.message);
  process.exit(1);
});

config({ path: './config.env' });
import app from './server/app';

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  debug(`App running on port ${port}...`);
});

process.on('unhandledRejection', (error) => {
  debug('UNHANDLED REJECTION! Shutting down...');
  debug(error.name, error.message);
  server.close(() => {
    process.exit(1);
  });
});

export default server;
