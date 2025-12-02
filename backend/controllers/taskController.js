import dayjs from "dayjs";

import { sql } from "../db/pg.js";

export const getTask = async (req, res) => {
  try {
    const { task_id } = req.params;
    const result = await sql`SELECT * FROM tasks WHERE task_id = ${task_id}`;

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Task not found."
      });
    }

    res.status(200).json({
      success: true,
      data: result[0],
      message: "Successfully fetched task."
    });
  } catch (error) {
    console.error("getTask error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error."
    });
  }
};

export const getTasks = async (req, res) => {
  try {
    const { date } = req.query;
    const cleanDate = dayjs(date).format("YYYY-MM-DD");
    let result;

    if (date) {
      result = await sql`
        SELECT * FROM tasks
        WHERE date = ${cleanDate}
        ORDER BY created_at DESC
      `;
    } else {
      result = await sql`
        SELECT * FROM tasks
        ORDER BY created_at DESC
      `;
    }

    res.status(200).json({
      success: true,
      data: result,
      message: "Fetched all tasks successfully."
    });
  } catch (error) {
    console.error("getTasks error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error."
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const { name, description } = req.body;
    const currentDate = dayjs().format("YYYY-MM-DD");
    const result = await sql`
      INSERT INTO tasks (date, name, description)
      VALUES (${currentDate}, ${name}, ${description})
      RETURNING *
    `;
    res.status(201).json({
      success: true,
      data: result[0],
      message: "Created a new task successfully."
    });
  } catch (error) {
    console.error("createTask error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error."
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { task_id } = req.params;
    const { name, description } = req.body;
    const result = await sql`
      UPDATE tasks
      SET name=${name}, description=${description}
      WHERE task_id = ${task_id}
      RETURNING *
    `;

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    res.status(200).json({
      success: true,
      data: result[0],
      message: "Task successfully updated"
    });
  } catch (error) {
    console.error("updateTask error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error."
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { task_id } = req.params;
    const result = await sql`
      DELETE FROM tasks
      WHERE task_id = ${task_id}
      RETURNING *
    `;

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Task not found."
      });
    }

    res.status(200).json({
      success: true,
      data: result[0],
      message: "Task successfully deleted"
    });
  } catch (error) {
    console.error("deleteTask error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error."
    });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const { date } = req.query;
    const cleanDate = dayjs(date).format("YYYY-MM-DD");

    if (!date) {
      return res.status(400).json({
        success: false,
        message: "Missing required query parameter: date."
      });
    }

    const result = await sql`
      DELETE FROM tasks
      WHERE date = ${cleanDate}
      RETURNING *
    `;

    res.status(200).json({
      success: true,
      data: result,
      message: `Succussfully deleted all tasks from date: ${date}`
    });
  } catch (error) {
    console.error("deleteTasks error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error."
    });
  }
};
