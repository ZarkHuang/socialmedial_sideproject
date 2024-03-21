module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "e9ff344105227fbf5b231cbe314fdd6e"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});
