import * as express from "express";
import { readData } from "./connection";
import * as dotenv from "dotenv";

const router = express.Router();
dotenv.config();

router.get("/api/hello", (req, res, next) => {
  res.json("SingleStore");
});

export default router;
