import { DataSourceOptions } from 'typeorm';
import { app, AppConfig } from './app.config';
import { database } from './database.config';

export interface Config {
  app: AppConfig;
  database: DataSourceOptions;
}

export default {
  app,
  database,
} as any;
