import { config } from './env.config';

export interface AppConfig {
  port: number;
  env: 'local' | 'dev' | 'staging' | 'production';
}

export const app: AppConfig = {
  port: config.APP_PORT,
  env: config.ENV,
};
