module.exports = {
  apps: [
    {
      name: 'piguardian-backend',
      script: './backend/index.js',
      env: {
        NODE_ENV: 'production',
        DATABASE_USER: 'piguardianuser',
        DATABASE_HOST: 'localhost',
        DATABASE_NAME: 'piguardian_db',
        DATABASE_PASSWORD: 'Plo9!b.',
        DATABASE_PORT: 5432,
        JWT_SECRET: '5wRD67W+dCYrNG+Sq3EACaj8lJHoBg6xr78vqA1i3BE=',
        JWT_EXPIRATION: '24h'
      }
    },
    {
      name: 'piguardian-frontend',
      script: 'npx',
      args: 'serve -s build -l 3000',
      cwd: './frontend',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
