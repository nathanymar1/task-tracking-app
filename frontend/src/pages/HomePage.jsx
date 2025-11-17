import React from "react";
import { Tasks } from "../components/Tasks";
import { Calendar } from "../components/Calendar";

import "./HomePage.css";

export function HomePage() {
  return (
    <>
      <title>Home</title>

      <div className="home-container">
        <Tasks />
        <Calendar />
      </div>
    </>
  );
}
