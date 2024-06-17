module.exports = {
  apps: [
    {
      name: 'piguardian-backend',
      script: './backend/index.js',
      env: {
        NODE_ENV: 'production'
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
