import express from "express";
import config from "./config";
import apiRouter from "./routes";
import morgan from "morgan";

//INIT A NEW EXPRESS APP
const app = express();

app.use(express.json());
app.use(morgan("common"));

//CREATE API ENDPOINTS
app.use("/api", apiRouter);

//MIDDLEWARE ERROR HANDLER
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
