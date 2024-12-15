import { config } from 'dotenv';
import { getEnv } from './env.config';
config();
const appConfig = {
    app: {
        name: process.env.APP_NAME,
        url: process.env.APP_URL,
        env: getEnv(),
    },
    server: {
        port: Number(process.env.PORT),
    },
    db: {
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
        port: process.env.DB_PORT,
    },
};
export default appConfig;
//# sourceMappingURL=app.config.js.map