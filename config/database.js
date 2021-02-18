module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('HOSTNAME', 'localhost'),
        port: env.int('PORT', 5432),
        database: env('DATABASE', 'strapi'),
        username: env('USERNAME', 'strapi-admin'),
        password: env('PASSWORD', 'strapi'),
        ssl: {
          ca: env('SSL_CERT'),
        }
      },
      options: {
        ssl: true,
      },
    },
  },
});
