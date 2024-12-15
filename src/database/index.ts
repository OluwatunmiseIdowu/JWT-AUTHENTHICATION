import 'reflect-metadata';
import path from 'path';
import { DataSource } from 'typeorm';
import { User } from './entities/User';
import appConfig from '../config/app.config';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: appConfig.db.host || 'localhost',
  port: parseInt(appConfig.db.port as string, 10) || 5432,
  username: appConfig.db.username || 'postgres',
  password: appConfig.db.password || 'password',
  database: appConfig.db.name || 'mydatabase',
  synchronize: false,
  logging: true,
  entities: [User],
  migrations: [path.join(__dirname, '../database/migrations/*.ts')],
  subscribers: [],
});

export default AppDataSource;
