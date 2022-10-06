import Menu from "../components/Menu/Menu";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home/Home");
const { default: Main } = require("../components/Main/Main");

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      }
    ]
  },
  {path: '*', element: <h1 className="text-5xl text-red-500 text-center">Ops! 404 Not Found!</h1>}
])