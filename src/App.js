import React, { useState } from "react";
import "./App.css";
import Header from "./header";
import Post from "./post";

function App() {
  return (
    <div className="app">
      <div className="header-app">
        <Header />
      </div>
      <Post />
    </div>
  );
}

export default App;
