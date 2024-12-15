export const healthCheck = (req, res) => {
    res.status(200).json({
        status: 'UP',
        timestamp: new Date(),
    });
};
//# sourceMappingURL=health.controller.js.map