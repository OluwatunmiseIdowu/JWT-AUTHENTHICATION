export const checkHealth = () => {
    return {
      status: 'UP',
      uptime: process.uptime(),
    };
  };
  