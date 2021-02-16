module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('db.HOSTNAME', 'localhost'),
        port: env.int('db.PORT', 5432),
        database: env('db.DATABASE', 'strapi'),
        username: env('db.USERNAME', 'strapi-admin'),
        password: env('db.PASSWORD', 'strapi'),
      },
      options: {
        ssl: env.bool('SSL_CERT', false),
      },
    },
  },
});
