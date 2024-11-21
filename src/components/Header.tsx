import { useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  //Check if dark mode has been set in local storage or set it according to user's system preference
  function getInitialDarkMode() {
    const localStorageDarkMode = localStorage.getItem("darkMode");
    const isDarkMode = localStorageDarkMode
      ? localStorageDarkMode === "true"
      : !window.matchMedia("(prefers-color-scheme: light)").matches;

    return isDarkMode;
  }

  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialDarkMode());

  //Set the theme of document on initial render
  useLayoutEffect(() => {
    setDocumentTheme(isDarkMode);
  }, []);

  function toggleDarkMode() {
    setIsDarkMode((prev) => {
      const newState = !prev;
      setDocumentTheme(newState);
      localStorage.setItem("darkMode", newState.toString());
      return newState;
    });
  }

  //Set the theme of document
  function setDocumentTheme(darkThem: boolean) {
    if (darkThem) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Social Feed</h1>
      <div className="flex justify-center items-center gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `bg-gray-700 px-4 py-2 rounded-md border border-solid border-transparent ${
              isActive && "border border-yellow-300"
            }`
          }
        >
          Feeds
        </NavLink>
        <NavLink
          to="/bookmarks"
          className={({ isActive }) =>
            `bg-gray-700 px-4 py-2 rounded-md border border-solid border-transparent ${
              isActive && "border border-yellow-300"
            }`
          }
        >
          Bookmarks
        </NavLink>
      </div>
      <button
        onClick={toggleDarkMode}
        className="bg-gray-700 px-4 py-2 rounded-md"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
