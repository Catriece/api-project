import express from "express";
import members from "../controllers/rewardmembers.controller";
const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  console.log("base route was reached");
  try {
    let { id } = req.params;
    let data;
    if (id) {
      console.log("individual ID was reached");
      data = await members.requestLogById(id);
    } else {
      console.log("request all was reached");
      data = await members.requestAllLogs();
    }
    res.json(data);
  } catch (err) {
    if (err) {
      next(err);
    }
  }
});

export default router;
