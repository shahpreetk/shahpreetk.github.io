import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as ROUTES from "./constants/routes";

import NavHeader from "./components/NavHeader";

const AboutMe = lazy(() => import("./pages/AboutMe"));
const Blogs = lazy(() => import("./pages/Blogs"));
const DigitalArt = lazy(() => import("./pages/DigitalArt"));
const Projects = lazy(() => import("./pages/Projects"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex h-screen">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <img className="h-24 w-auto" src="/images/shahpreetk-logo.png" alt="loader logo" />
                <h1>Loading...</h1>
              </div>
            </div>
          </div>
        }
      >
        <NavHeader />
        <Routes>
          <Route path={ROUTES.ABOUT_ME} element={<AboutMe />} />
          <Route path={ROUTES.BLOGS} element={<Blogs />} />
          <Route path={ROUTES.DIGITAL_ART} element={<DigitalArt />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
