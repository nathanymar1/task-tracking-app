import React from "react";
import { Tasks } from "../components/Tasks";

import "./HomePage.css";

export function HomePage() {
  return (
    <div className="bg-white">
      <title>Home</title>

      <div className="home-container">
        <Tasks />
      </div>
    </div>
  );
}
