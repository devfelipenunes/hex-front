"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import ButtonThirdWeb from "./ButtonThirdWeb";

interface TemplateProps {
  children: ReactNode;
}
const Template: FC<TemplateProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="fixed  top-0 z-50 w-full bg-white dark:bg-[#111111]">
        <div className="px-3 py-4 lg:px-5 lg:pl-3 max-w-7xl mx-auto">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center justify-between w-full">
              <a
                aria-label="Home"
                href="/"
                className="flex flex-row items-center justify-center space-x-1 px-3"
              >
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  HEX
                </p>
              </a>

              <div className="flex flex-row items-center justify-center space-x-5">
                <ButtonThirdWeb />
                <button
                  onClick={toggleSidebar}
                  aria-controls="logo-sidebar"
                  aria-label="Toggle Sidebar"
                  type="button"
                  className="inline-flex items-center rounded-lg font-semibold p-2 text-sm md:hidden"
                >
                  <div>
                    {!isSidebarOpen ? (
                      <svg
                        className={`transition-transform duration-300 ease-in-out ${
                          isSidebarOpen ? "rotate-180" : ""
                        } fill-current text-gray-900 dark:text-white`}
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12.0938H20"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 6.09375H20"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 18.0938H20"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        className={`transition-transform duration-300 ease-in-out ${
                          isSidebarOpen ? "rotate-180" : ""
                        } fill-current text-gray-900 dark:text-white`}
                        width="24"
                        height="25"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 8L8 24"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 8L24 24"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed right-0 top-0 z-40 h-screen w-full bg-white dark:bg-[#111111] pt-20 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } `}
        aria-label="Sidebar"
      >
        <div className="h-full px-6 py-6 gap-6 flex flex-col ">
          {/* MENU AQUI */}
        </div>
      </aside>

      <div className="relative bg-white dark:bg-[#111111]">
        <div className="mt-14 min-h-screen pt-5 bg-white dark:bg-[#111111]">
          {children}
        </div>
      </div>
    </>
  );
};

export default Template;
