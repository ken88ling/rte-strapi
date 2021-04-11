module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 2337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "25bb9723652184191bdcf035564e75bb"),
    },
  },
});
