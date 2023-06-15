import express from "express";
import membersRouter from "./rewardmembers.route";

const router = express.Router();

router.use("/rewardmembers", membersRouter);

console.log("Initialized routes:", router);

export default router;
