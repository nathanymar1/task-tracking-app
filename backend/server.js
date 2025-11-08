import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
