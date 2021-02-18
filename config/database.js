module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOSTNAME', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi-admin'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: {
          ca: env('SSL_CERT'),
        }
      },
      options: {
        ssl: true,
        pool: {
          acquireTimeoutMilis: 60000,
        }
      },
    },
  },
});
