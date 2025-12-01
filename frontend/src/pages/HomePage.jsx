import { Tasks } from "../components/Tasks";
import { Header } from "../components/Header";

import "./HomePage.css";

export function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <title>Home</title>

      <div className="w-full max-w-3xl mx-auto px-4">
        <Header />
        <Tasks />
      </div>
    </div>
  );
}
