import { isUUID } from 'validator';
export const validateIdParams = (req, res, next) => {
    const { id } = req.params;
    if (!isUUID(id)) {
        return res.status(400).json({ message: 'Invalid ID parameter.' });
    }
    next();
};
//# sourceMappingURL=validate-id-params.middleware.js.map