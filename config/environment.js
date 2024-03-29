const development = {
  name: "development",

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL: "http://localhost:3000/user/oauth2callback",

  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  GITHUB_CALLBACK_URL: "http://localhost:3000/user/auth/github/callback",

  mongoDbUrl: process.env.mongoDbUrl,

  JWT_RESET_PASSWORD_KEY: process.env.JWT_RESET_PASSWORD_KEY,
};

const production = {
  name: "production",

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL: "https://placement-cell-83pc.onrender.com/user/oauth2callback",

  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  GITHUB_CALLBACK_URL:
    "https://placement-cell-83pc.onrender.com/user/auth/github/callback",

  mongoDbUrl: process.env.mongoDbUrl,

  JWT_RESET_PASSWORD_KEY: process.env.JWT_RESET_PASSWORD_KEY,
};

module.exports = production;
