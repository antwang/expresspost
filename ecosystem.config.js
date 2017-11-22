module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    // First application
    {
      name      : 'test',
      script    : 'app.js',
      out_file: './logs/test.out.log',
      error_file: './logs/test.err.log',
      pid_file: './pid/test-pm_id.pid',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ]
};
