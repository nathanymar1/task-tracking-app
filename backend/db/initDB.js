import client from "./pg.js";

export async function initDB() {
  try {
    await client.query(
      `CREATE TABLE IF NOT EXISTS tasks (
        task_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(255) NOT NULL,
        description TEXT DEFAULT '',
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      )`
    );
    await client.query(
      `CREATE TABLE IF NOT EXISTS sessions (
        session_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        task_id INT REFERENCES tasks(task_id),
        session_start TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        session_end TIMESTAMPTZ
      )`
    );
    console.log("Database initialized successfully.");
  } catch (error) {
    console.log("Error initializing database:", error);
  }
}
