const devEnv = process.env.NODE_ENV !== 'production';
export const server = devEnv ? 'http://localhost:3000' : 'https://deploymentServer.com';
