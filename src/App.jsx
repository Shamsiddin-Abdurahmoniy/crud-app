// react
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
// components
import { Error, Modal, Update } from "./components";
function App() {
  // const themes = {
  //   winter: "winter",
  //   dracula: "dracula",
  // };

  // const getThemeFromLocalStorage = () => {
  //   return localStorage.getItem("theme" || themes.winter);
  // };
  // const [theme, setTheme] = useState(getThemeFromLocalStorage());
  // const handleTheme = () => {
  //   const { winter, dracula } = themes;
  //   const newTheme = theme === winter ? dracula : winter;
  //   document.documentElement.setAttribute("data-theme", theme);
  //   setTheme(newTheme);
  // };

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  //   localStorage.setItem("theme", theme);
  // }, [theme]);
  //
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <Error />,
        },
      ],
    },
    {
      path: "/create",
      element: <Modal />,
      errorElement: <Error />,
    },
    {
      path: "/edit/:id",
      element: <Update />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
