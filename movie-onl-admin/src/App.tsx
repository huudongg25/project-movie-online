import React from "react";
import "./App.css";

import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./components/DashBoard/DashBoard";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import Movies from "./components/Movies/Movies";
import PublicRouters from "./routes/Public.router";

function App() {
  return (
    <div className="App">
      <p>
        <PublicRouters></PublicRouters>
      </p>
    </div>
  );
}

export default App;
