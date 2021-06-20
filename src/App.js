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
import Inventostocks from "./pages/Inventostocks";
import DJEvents from "./pages/DJEvents";

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
          <Route path={process.env.PUBLIC_URL + "/"} component={About} exact />
          {/* <Route path={"/about" component={About} exact /> */}
          <Route
            path={process.env.PUBLIC_URL + "/extracurriculars"}
            component={Extracurriculars}
            exact
          />
          <Route
            path={process.env.PUBLIC_URL + "/experience"}
            component={Experience}
            exact
          />
          <Route
            path={process.env.PUBLIC_URL + "/skills"}
            component={Skills}
            exact
          />
          <Route
            path={process.env.PUBLIC_URL + "/projects/bookit"}
            component={BookIt}
            exact
          />
          <Route
            path={process.env.PUBLIC_URL + "/projects/learnfromhome"}
            component={LearnfromHome}
            exact
          />
          <Route
            path={process.env.PUBLIC_URL + "/projects/curatedlearning"}
            component={CuratedLearning}
            exact
          />
          <Route
            path={process.env.PUBLIC_URL + "/projects/smartbrain"}
            component={SmartBrain}
            exact
          />
          <Route
            path={process.env.PUBLIC_URL + "/projects/inventostocks"}
            component={Inventostocks}
            exact
          />
          <Route
            path={process.env.PUBLIC_URL + "/projects/dj-events"}
            component={DJEvents}
            exact
          />
        </Switch>
      </div>
    </>
  );
}

export default App;
