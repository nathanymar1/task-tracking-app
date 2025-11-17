import express from "express";
import {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/:task_id", getTask);
router.get("/", getTasks);
router.post("/", createTask);
router.put("/:task_id", updateTask);
router.delete("/:task_id", deleteTask);

export default router;
