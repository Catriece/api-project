import dotenv from "dotenv";

// ensures that env variables are loaded
//dotenv is a library when imported it is converted into an object
const envFound = dotenv.config();

if (!envFound) {
  throw new Error("Couldn't find .env!");
}

// console.log("Loaded env variables:", process.env);

// exports env variables for use
export default {
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
  },
  port: parseInt(process.env.PORT),
};
