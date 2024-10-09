import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import SwitchMode from "./components/SwitchMode";
import NavBar from "./components/NavBar";
import MobileHeader from "./components/MobileHeader";
import MobileFooter from "./components/MobileFooter";

const LazyHome = lazy(() => import("./pages/Home"));
const LazySkills = lazy(() => import("./pages/Skills"));
const LazyProjects = lazy(() => import("./pages/Projects"));
const LazyContact = lazy(() => import("./pages/Contact"));

const App = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-primary font-main lg:h-screen lg:w-screen lg:px-10 lg:py-5 transition-colors duration-700 lg:grid lg:place-content-center">
      <div className="flex justify-end">
        <SwitchMode show="hidden lg:flex" />
      </div>
      <main className="lg:grid lg:grid-cols-12 lg:place-items-center">
        <MobileHeader />
        <NavBar />
        <div className="col-span-11 px-10 lg:px-0">
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <Suspense fallback={<div className="loading"></div>}>
                    <LazyHome />
                  </Suspense>
                }
              ></Route>
              <Route
                path="/skills"
                element={
                  <Suspense fallback={<div className="loading"></div>}>
                    <LazySkills />
                  </Suspense>
                }
              ></Route>
              <Route
                path="/projects"
                element={
                  <Suspense fallback={<div className="loading"></div>}>
                    <LazyProjects />
                  </Suspense>
                }
              ></Route>
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<div className="loading"></div>}>
                    <LazyContact />
                  </Suspense>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
        <MobileFooter />
      </main>
    </div>
  );
};

export default App;
