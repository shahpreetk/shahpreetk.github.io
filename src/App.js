import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Sidebar from "./components/Sidebar";
import Extracurriculars from "./pages/Extracurriculars";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <div
        data-todo-x-data="{ open: false }"
        data-todo-at-keydown-window-escape="open = false"
        className="h-screen flex overflow-hidden bg-white"
      >
        <Sidebar />
        <Switch>
          <Route path="/extracurriculars" component={Extracurriculars} exact />
          <Route path="/experience" component={Experience} exact />
          <Route path="/skills" component={Skills} exact />
          <Route path={"/" | "/about"} component={About} exact />
        </Switch>
      </div>
    </>
  );
}

export default App;
