import { Router } from 'express';
import { getAppInfo } from './app.controller';
const router = Router();
router.get('/info', getAppInfo);
export { router as appRoutes };
//# sourceMappingURL=app.routes.js.map