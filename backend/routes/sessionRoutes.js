import express from "express";
import {
  getSessions,
  startSession,
  stopSession,
  deleteSession
} from "../controllers/sessionController.js";

const router = express.Router({ mergeParams: true });

router.get("/", getSessions);
router.post("/start", startSession);
router.put("/stop", stopSession);
router.delete("/:session_id", deleteSession);

export default router;
