module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: "mongodb://admin:password@139.59.226.135:27017/?authSource=admin",
        srv: env.bool("DATABASE_SRV", true),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "rte"),
        username: env("DATABASE_USERNAME", "admin"),
        password: env("DATABASE_PASSWORD", "password"),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        useUnifiedTopology: false,
      },
    },
  },
});
