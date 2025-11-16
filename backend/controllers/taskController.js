import { sql } from "../db/pg.js";

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await sql`SELECT * FROM tasks WHERE task_id = ${id}`;

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
    const result = await sql`
    SELECT * FROM tasks
    ORDER BY created_at DESC
    `;
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
    const result = await sql`
      INSERT INTO tasks (name, description)
      VALUES (${name}, ${description})
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
    const { id } = req.params;
    const { name, description } = req.body;
    const result = await sql`
      UPDATE tasks
      SET name=${name}, description=${description}
      WHERE task_id = ${id}
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
    const { id } = req.params;
    const result = await sql`
      DELETE FROM tasks
      WHERE task_id = ${id}
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
