import { sql } from "../db/pg.js";

export const getSession = async (req, res) => {
  try {
    const { task_id, session_id } = req.params;
    const result = await sql`
      SELECT *
      FROM sessions
      WHERE task_id=${task_id} AND session_id=${session_id}
    `;

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Session not found."
      });
    }

    res.status(200).json({
      success: true,
      data: result[0],
      message: "Successfully fetched session."
    });
  } catch (error) {
    console.error("getSession error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error."
    });
  }
};

export const getSessions = async (req, res) => {
  try {
    const { task_id } = req.params;
    const result = await sql`
      SELECT *
      FROM sessions
      WHERE task_id = ${task_id}
    `;

    res.status(200).json({
      success: true,
      data: result,
      message: "Successfully fetched sessions."
    });
  } catch (error) {
    console.error("getSessions error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error."
    });
  }
};

export const createSession = async (req, res) => {
  try {
    const { task_id } = req.params;
    const result = await sql`
      INSERT INTO sessions (task_id, session_start)
      VALUES (${task_id}, NOW())
      RETURNING *
    `;

    res.status(201).json({
      success: true,
      data: result[0],
      message: "Successfully created session."
    });
  } catch (error) {
    console.error("createSession error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error."
    });
  }
};

export const updateSession = async (req, res) => {
  try {
    const { task_id, session_id } = req.params;
    const result = await sql`
      UPDATE sessions
      SET session_end = NOW()
      WHERE task_id=${task_id} AND session_id=${session_id}
      RETURNING *
    `;

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Task or session not found."
      });
    }

    res.status(200).json({
      success: true,
      data: result[0],
      message: "Successfully updated session."
    });
  } catch (error) {
    console.error("updateSession error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error."
    });
  }
};

export const deleteSession = async (req, res) => {
  try {
    const { task_id, session_id } = req.params;
    const result = await sql`
      DELETE FROM sessions
      WHERE task_id = ${task_id} AND session_id = ${session_id}
      RETURNING *
    `;

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Task or session not found."
      });
    }

    res.status(200).json({
      success: true,
      data: result[0],
      message: "Successfully deleted session."
    });
  } catch (error) {
    console.error("deleteSession error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error."
    });
  }
};
