module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST','rte-website.uzd2k.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'rte'),
        username: env('DATABASE_USERNAME', 'rte-admin'),
        password: env('DATABASE_PASSWORD', 'Bzuvf1lLPDE5aXPC'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        useUnifiedTopology: false,
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
