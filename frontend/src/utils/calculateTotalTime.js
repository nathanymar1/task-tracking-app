import axios from "axios";

export async function calculateTotalTime() {
  const response = await axios.get("/api/tasks/:task_id/sessions");
  console.log(response.data.data);
}
