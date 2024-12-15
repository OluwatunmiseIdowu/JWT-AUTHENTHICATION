import app from './app';
import logger from './shared/utils/logger/logger';
import 'reflect-metadata';
import bootstrap from './bootstrap';
import appConfig from './config/app.config';
const PORT = appConfig.server.port || 3000;
bootstrap().then(() => {
    app.listen(PORT, () => {
        logger.info(`Server running on port ${PORT}`);
    });
});
//# sourceMappingURL=server.js.map