import "dotenv/config.js";

export const name = process.env.APP_NAME || "Express JS";
export const env = process.env.APP_ENV || "development";
export const port = process.env.APP_PORT || "5000";
export const url = process.env.APP_URL || "http://localhost:5000";

// Path: config\app.config.js
