import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";

const Sidebar = () => {
  const [isShowing, setIsShowing] = useState(true);

  return (
    <>
      <div
        className="fixed inset-0 flex z-40 lg:hidden"
        data-todo-x-ref="dialog"
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`${
            isShowing ? "inset-0" : ""
          } fixed bg-gray-600 bg-opacity-75`}
          aria-hidden="true"
        >
          <button
            type="button"
            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setIsShowing((isShowing) => !isShowing)}
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
        </div>
        <Transition
          show={isShowing}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="relative flex-1 flex flex-col max-w-sm w-full pt-5 pb-4 bg-gray-800 h-full">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setIsShowing((isShowing) => !isShowing)}
              >
                <span className="sr-only">Close sidebar</span>
                <svg
                  className="h-6 w-6 text-white"
                  data-todo-x-description="Heroicon name: outline/x"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="flex-shrink-0 flex items-center px-4 text-xl text-white">
              <img
                className="h-8 w-auto rounded"
                src="/images/logo.png"
                alt="Preet Shah"
              />{" "}
              &nbsp; Preet Shah
            </div>
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <nav className="px-2">
                <div className="space-y-1">
                  <NavLink
                    to="/"
                    exact
                    activeClassName="selectedSidebarOption"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-300 mr-4 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                    About
                  </NavLink>

                  <NavLink
                    to="/skills"
                    exact
                    activeClassName="selectedSidebarOption"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
                      data-todo-x-state-description='Current: "text-gray-300", Default: "text-gray-400 group-hover:text-gray-300"'
                      data-todo-x-description="Heroicon name: outline/view-list"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      ></path>
                    </svg>
                    Skills
                  </NavLink>
                  <NavLink
                    to="/experience"
                    exact
                    activeClassName="selectedSidebarOption"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
                      data-todo-x-state-description='undefined: "text-gray-300", undefined: "text-gray-400 group-hover:text-gray-300"'
                      data-todo-x-description="Heroicon name: outline/user-circle"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    Experience
                  </NavLink>

                  <NavLink
                    to="/extracurriculars"
                    exact
                    activeClassName="selectedSidebarOption"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
                      data-todo-x-state-description='undefined: "text-gray-300", undefined: "text-gray-400 group-hover:text-gray-300"'
                      data-todo-x-description="Heroicon name: outline/archive"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      ></path>
                    </svg>
                    Extracurriculars
                  </NavLink>
                </div>

                <div className="mt-10">
                  <p className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Projects
                  </p>
                  <div className="mt-2 space-y-1">
                    <NavLink
                      to="/projects/bookit"
                      exact
                      activeClassName="selectedSidebarOption"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    >
                      <span className="truncate">BookIt</span>
                    </NavLink>

                    <NavLink
                      to="/projects/learnfromhome"
                      exact
                      activeClassName="selectedSidebarOption"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    >
                      <span className="truncate">Learn from Home</span>
                    </NavLink>

                    <NavLink
                      to="/projects/curatedlearning"
                      exact
                      activeClassName="selectedSidebarOption"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    >
                      <span className="truncate">curatedLearning</span>
                    </NavLink>

                    <NavLink
                      to="/projects/smartbrain"
                      exact
                      activeClassName="selectedSidebarOption"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    >
                      <span className="truncate">SmartBrain</span>
                    </NavLink>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </Transition>
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900 text-white text-xl">
              <img
                className="h-8 w-auto rounded"
                src="/images/logo.png"
                alt="Preet Shah"
              />{" "}
              &nbsp; Preet Shah
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 bg-gray-800">
                <div className="space-y-1">
                  <NavLink
                    to="/"
                    exact
                    activeClassName="selectedSidebarOption"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-300 mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                    About
                  </NavLink>
                  <NavLink
                    to="/skills"
                    exact
                    activeClassName="selectedSidebarOption"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
                      data-todo-x-state-description='undefined: "text-gray-300", undefined: "text-gray-400 group-hover:text-gray-300"'
                      data-todo-x-description="Heroicon name: outline/view-list"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      ></path>
                    </svg>
                    Skills
                  </NavLink>

                  <NavLink
                    to="/experience"
                    exact
                    activeClassName="selectedSidebarOption"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
                      data-todo-x-state-description='undefined: "text-gray-300", undefined: "text-gray-400 group-hover:text-gray-300"'
                      data-todo-x-description="Heroicon name: outline/user-circle"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    Experience
                  </NavLink>

                  <NavLink
                    to="/extracurriculars"
                    exact
                    activeClassName="selectedSidebarOption"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
                      data-todo-x-state-description='undefined: "text-gray-300", undefined: "text-gray-400 group-hover:text-gray-300"'
                      data-todo-x-description="Heroicon name: outline/archive"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      ></path>
                    </svg>
                    Extracurriculars
                  </NavLink>
                </div>
                <div className="mt-10">
                  <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Projects
                  </p>
                  <div className="mt-2 space-y-1">
                    <NavLink
                      to="/projects/bookit"
                      exact
                      activeClassName="selectedSidebarOption"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    >
                      <span className="truncate">BookIt</span>
                    </NavLink>

                    <NavLink
                      to="/projects/learnfromhome"
                      exact
                      activeClassName="selectedSidebarOption"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    >
                      <span className="truncate">Learn from Home</span>
                    </NavLink>

                    <NavLink
                      to="/projects/curatedlearning"
                      exact
                      activeClassName="selectedSidebarOption"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    >
                      <span className="truncate">curatedLearning</span>
                    </NavLink>

                    <NavLink
                      to="/projects/smartbrain"
                      exact
                      activeClassName="selectedSidebarOption"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    >
                      <span className="truncate">SmartBrain</span>
                    </NavLink>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
