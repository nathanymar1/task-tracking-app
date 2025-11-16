import client from "../db/pg.js";

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await client.query(
      `SELECT * FROM tasks WHERE task_id = $1`,
      [id]
    );
    res.status(200).json({
      success: true,
      data: result.rows[0],
      message: "Successfully fetched task."
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Interal server error." });
  }
};

export const getTasks = async (req, res) => {
  try {
    const result = await client.query(`SELECT * FROM tasks`);
    res.status(200).json({
      success: true,
      data: result.rows,
      message: "Fetched all tasks successfully."
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

export const createTask = async (req, res) => {};

export const updateTask = async (req, res) => {};

export const deleteTask = async (req, res) => {};
