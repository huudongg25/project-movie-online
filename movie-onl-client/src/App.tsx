import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PublicRouter from "./routes/Public.router";

function App() {
  return (
    <div className="App">
      <PublicRouter />
    </div>
  );
}

export default App;
