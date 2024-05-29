import * as env from 'dotenv';

export interface EnvConfigOptions {
  APP_PORT: number;
  DATABASE_TYPE: 'postgres' | 'mysql';
  DATABASE_HOST: string;
  DATABASE_PORT: number;
  DATABASE_USERNAME: string;
  DATABASE_PASSWORD: string;
  DATABASE_NAME: string;
  DATABASE_SCHEMA: string;
  DATABASE_SYNC: boolean;
  DATABASE_LOGGING:
    | boolean
    | 'all'
    | ('query' | 'schema' | 'error' | 'warn' | 'info' | 'log' | 'migration')[];
  ENV: 'local' | 'dev' | 'staging' | 'production';
}

const defaultConfig: EnvConfigOptions = {
  APP_PORT: 3200,
  DATABASE_TYPE: 'postgres',
  DATABASE_HOST: 'localhost',
  DATABASE_PORT: 54322,
  DATABASE_USERNAME: 'test',
  DATABASE_PASSWORD: 'password',
  DATABASE_NAME: 'admin',
  DATABASE_SCHEMA: 'test',
  DATABASE_SYNC: true,
  DATABASE_LOGGING: 'all',
  ENV: 'local'
};

export const config: EnvConfigOptions = {
  ...defaultConfig,
  ...process.env,
  ...env.config().parsed,
};
