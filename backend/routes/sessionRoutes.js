import express from "express";
import {
  getSession,
  getSessions,
  createSession,
  updateSession,
  deleteSession
} from "../controllers/sessionController.js";

const router = express.Router({ mergeParams: true });

router.get("/:session_id", getSession);
router.get("/", getSessions);
router.post("/", createSession);
router.put("/:session_id", updateSession);
router.delete("/:session_id", deleteSession);

export default router;
