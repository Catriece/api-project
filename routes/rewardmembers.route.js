import express from "express";
import members from "../controllers/rewardmembers.controller";

const router = express.Router();

// GET ALL REWARD MEMBERS

router.get("/", async (req, res, next) => {
  try {
    let data;

    if (!req.params) {
      data = await members.findAll();
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
});

//GET ONE REWARDS MEMBER
router.get("/byphone/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data;

    if (id) {
      data = await members.findOnePN();
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
      data = await members.findOneLN();
    } else {
      data = await members.findAll();
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
      data = await members.findOneEA();
    } else {
      data = await members.findAll();
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
});

//ADD NEW REWARDS MEMBER
// router.post("/", async (req, res, next) => {
//     try {

//     } catch (err) {
//         if (err)
//     }
// })
