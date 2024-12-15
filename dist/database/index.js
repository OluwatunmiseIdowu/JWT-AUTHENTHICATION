import 'reflect-metadata';
import express from 'express';
import { DataSource } from 'typeorm';
import { User } from './entities/User';
import appConfig from '../config/app.config';
console.log(appConfig);
export const app = express();
const AppDataSource = new DataSource({
    type: 'postgres',
    host: appConfig.db.host || 'localhost',
    port: parseInt(appConfig.db.port, 10) || 5432,
    username: appConfig.db.username || 'postgres',
    password: appConfig.db.password || 'password',
    database: appConfig.db.name || 'mydatabase',
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: ['src/migrations/*.ts'],
    subscribers: [],
});
export default AppDataSource;
// async function connectToDatabase() {
//   try {
//     await AppDataSource.initialize();
//     console.log("Connection to the database has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }
// import { AppDataSource } from "./data-source";
// AppDataSource.initialize()
//   .then(() => {
//     console.log("Data Source has been initialized!");
//     // Start your server here
//   })
//   .catch((err) => {
//     console.error("Error during Data Source initialization", err);
//   });
// connectToDatabase();
// app.use(express.json());
// app.use("/auth", authRouter);
// app.use("/user", userRouter);
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
//# sourceMappingURL=index.js.map