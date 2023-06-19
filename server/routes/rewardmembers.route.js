import express from "express";
import members from "../controllers/rewardmembers.controller";
import query from "../db/utils";
import logRouter from "./requestlog.route";

const router = express.Router();

const logger = async (req, res, next) => {
  try {
    const { url, method } = req;
    const timestamp = new Date();

    await query(
      "INSERT INTO requestlogs (url, method, timestamp) VALUES (?, ?, ?)",
      [url, method, timestamp]
    );
    next();
  } catch (err) {
    if (err) {
      next(err);
    }
  }
};

router.use(logger);

router.use("/requestlog", logRouter);

//GET ONE REWARDS MEMBER
router.get("/byphone/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data;

    if (id) {
      data = await members.findOnePN(id);
    } else {
      data = await members.findAll();
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/bylastname/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data;

    if (id) {
      data = await members.findOneLN(id);
    } else {
      data = await members.findAll(id);
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/byemail/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data;

    if (id) {
      data = await members.findOneEA(id);
    } else {
      data = await members.findAll();
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
});

// GET ALL REWARD MEMBERS

router.get("/:id?", async (req, res, next) => {
  console.log("reward members w/id reached");
  try {
    let { id } = req.params;
    let data;

    if (id) {
      data = await members.findOne(id);
    } else {
      data = await members.findAll();
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
});

//ADD NEW REWARDS MEMBER
router.post("/", async (req, res, next) => {
  try {
    let newMember = req.body;
    let data = await members.addRewardsMember(newMember);
    res.json(data);
  } catch (err) {
    if (err) {
      next(err);
    }
  }
});

//UPDATE EXISTING REWARDS MEMBER
router.put("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let updateMember = req.body;
    let data = await members.updateRewardsMember(updateMember, id);

    res.json(data);
  } catch (err) {
    next(err);
  }
});

//DELETE EXISTING REWARDS MEMBER
router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data = await members.removeMember(id);

    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
