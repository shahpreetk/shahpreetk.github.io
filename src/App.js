import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Sidebar from "./components/Sidebar";
import Extracurriculars from "./pages/Extracurriculars";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import BookIt from "./pages/BookIt";
import LearnfromHome from "./pages/LearnfromHome";
import CuratedLearning from "./pages/CuratedLearning";
import SmartBrain from "./pages/SmartBrain";

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
          <Route path="/projects/bookit" component={BookIt} exact />
          <Route
            path="/projects/learnfromhome"
            component={LearnfromHome}
            exact
          />
          <Route
            path="/projects/curatedlearning"
            component={CuratedLearning}
            exact
          />
          <Route path="/projects/smartbrain" component={SmartBrain} exact />
          <Route path={"/" | "/about"} component={About} exact />
        </Switch>
      </div>
    </>
  );
}

export default App;
