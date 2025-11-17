import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
