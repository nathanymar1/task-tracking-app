import React from "react";
import { Tasks } from "../components/Tasks";
import { Header } from "../components/Header";

import "./HomePage.css";

export function HomePage() {
  return (
    <div className="bg-white">
      <title>Home</title>

      <div className="h-screen flex flex-col items-center">
        <Header />

        <Tasks />
      </div>
    </div>
  );
}
