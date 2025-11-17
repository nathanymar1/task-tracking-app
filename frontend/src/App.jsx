import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CalendarPage } from "./pages/CalendarPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="calendar" element={<CalendarPage />} />
    </Routes>
  );
}

export default App;
