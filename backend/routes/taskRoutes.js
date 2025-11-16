import express from "express";
import {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/:id", getTask);
router.get("/", getTasks);
router.get("/", createTask);
router.get("/:id", updateTask);
router.get("/:id", deleteTask);

export default router;
