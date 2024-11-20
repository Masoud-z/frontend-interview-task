import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Toast from "./components/core/Toast/Toast";
import useStore from "./store/useStore";
const Layout: React.FC = () => {
  const toasts = useStore((state) => state.toasts);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main>
        <Outlet />
      </main>
      {toasts.map((toast, index) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          id={toast.id}
          index={index}
        />
      ))}
    </div>
  );
};

export default Layout;
